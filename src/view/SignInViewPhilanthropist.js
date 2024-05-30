import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';

const SignInViewPhilanthropist = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignInPhilanthropist = async () => {
    const philanthropistSignInData = () => {
      return {
        email,
        password
      };
    } 
    // try {
    //   // Implement your authentication logic here
    //   // For demonstration purposes, let's assume authentication is successful if the email and password match a hardcoded value
    //   const hardcodedEmail = 'philanthropist@example.com';
    //   const hardcodedPassword = 'password';
      
    //   if (email === hardcodedEmail && password === hardcodedPassword) {
    //     Alert.alert('Success', 'Authentication successful.');
    //     // Reset form fields after successful sign-in
    //     setEmail('');
    //     setPassword('');
    //   } else {
    //     throw new Error('Invalid email or password.');
    //   }
    // } catch (error) {
    //   Alert.alert('Error', error.message);
    // }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giriş Yap Yardımsever</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
       <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleSignInPhilanthropist} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Giriş</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer2}>
      <TouchableOpacity onPress={() => navigation.navigate('Sign Up Philanthropist')}>
        <Text style={styles.loginText}>Hesabın yok mu? Kayıt Ol!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Forgot My Password')}>
        <Text style={styles.loginText}>Şifremi Unuttum</Text>
      </TouchableOpacity>
      </View>
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
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Butonları yatay olarak ortalamak için space-around kullanıyoruz
    width: '100%',
    marginTop: 20,
  },
  buttonContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'column',
    margin:10,
  },
  buttonContainer2:{
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'column',
    margin:10,
    alignItems:'center'
  },
  buttonText: {
    color: 'blue', // Buton metninin rengini beyaz yapmak için color özelliğini ekledim
  },
  loginText: {
      marginTop: 10,
      marginBottom:10,
      color: 'blue',
      textDecorationLine: 'underline',
  },
});

export default SignInViewPhilanthropist;
