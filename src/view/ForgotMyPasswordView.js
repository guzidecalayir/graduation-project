import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

const ForgotMyPasswordView = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);

  // Function to handle sending code
  const handleSendCode = () => {
    // You can implement code sending logic here
    // For example, sending a request to the server to send the code to the email provided
    // Upon successful sending, set isCodeSent to true
    setIsCodeSent(true);
    Alert.alert('Kod Gönderildi', 'Sıfırlama kodu emailinize gönderildi.');
  };

  // Function to handle password reset
  const handleResetPassword = () => {
    if (!code || !newPassword || !confirmPassword) {
        Alert.alert('HAta', 'Lütfen tüm alanları doldurun.');
        return;
      }
    // Check if passwords match
    if (newPassword !== confirmPassword) {
      Alert.alert('Hata', 'Şifreler eşleşmiyor.');
      return;
    }

    // You can implement password reset logic here
    // For example, sending a request to the server to verify the code and update the password
    Alert.alert('Bİlgi', 'Şifreniz başarıyla değiştiildi.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Şifremi Unuttum</Text>
      {!isCodeSent ? (
        <>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email Addresi"
            keyboardType="email-address"
          />
          <Button title="Kod Gönder" onPress={handleSendCode} />
        </>
      ) : (
        <>
          <TextInput
            style={styles.input}
            value={code}
            onChangeText={setCode}
            placeholder="Kodu Girin"
          />
          <TextInput
            style={styles.input}
            value={newPassword}
            onChangeText={setNewPassword}
            placeholder="Yeni Şifre"
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Yeni Şifre Tekrar"
            secureTextEntry={true}
          />
          <Button title="Şifremi Sıfırla" onPress={handleResetPassword} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default ForgotMyPasswordView;
