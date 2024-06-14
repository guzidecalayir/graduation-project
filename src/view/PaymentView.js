import React, { useState, useContext } from "react";
import { View, Button, StyleSheet, Alert } from "react-native";
import { CardField, useStripe } from "@stripe/stripe-react-native";
import { AuthContext } from "../context/AuthContext";

const PaymentScreen = () => {
    const { confirmPayment, createPaymentMethod } = useStripe();
    const [cardDetails, setCardDetails] = useState(null);
    const {userToken} =useContext(AuthContext);

    const handlePayPress = async () => {
        if (!cardDetails?.complete) {
            Alert.alert("Error", "Please enter complete card details.");
            return;
        }

        try {
            // Create a payment method
            const { error: methodError, paymentMethod } = await createPaymentMethod({
                type: 'Card',
                card: {
                    number: cardDetails?.number,
                    expMonth: cardDetails?.expMonth,
                    expYear: cardDetails?.expYear,
                    cvc: cardDetails?.cvc,
                },
            });

            if (methodError) {
                console.error("Payment Method Error:", methodError);
                Alert.alert("Payment Method Error", methodError.message);
                return;
            }

            // Call your backend to create a PaymentIntent with the payment method ID
            const response = await fetch("http://localhost:5093/api/Philanthropist/donate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${userToken}`
                },
                body: JSON.stringify({
                    amount: 1000, // Example amount in cents (10.00 USD)
                    description: "Donation to XYZ",
                    paymentMethodId: paymentMethod.id, // Use the payment method ID
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Backend Error:", errorData);
                Alert.alert("Backend Error", errorData.message || "An unexpected error occurred.");
                return;
            }

            const { clientSecret } = await response.json();

            const { error: confirmError, paymentIntent } = await confirmPayment(clientSecret, {
                paymentMethodId: paymentMethod.id,
            });

            if (confirmError) {
                console.error("Payment Confirmation Error:", confirmError);
                Alert.alert("Payment Confirmation Error", confirmError.message);
            } else if (paymentIntent) {
                Alert.alert("Success", "Payment was successful!");
            }
        } catch (error) {
            console.error("Payment Error:", error);
            Alert.alert("Error", "Payment failed. Please try again.");
        }
    };

    return (
        <View style={styles.container}>
            <CardField
                postalCodeEnabled={true}
                placeholders={{
                    number: "4242 4242 4242 4242", // Test card number
                }}
                cardStyle={styles.card}
                style={styles.cardContainer}
                onCardChange={(cardDetails) => {
                    setCardDetails(cardDetails);
                }}
            />
            <Button onPress={handlePayPress} title="Ödeme Yap" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        margin: 20,
    },
    card: {
        backgroundColor: "#FFFFFF",
    },
    cardContainer: {
        height: 50,
        marginVertical: 30,
    },
});

export default PaymentScreen;