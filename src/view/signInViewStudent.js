import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';

const SignInViewStudent = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      // Implement your authentication logic here
      const hardcodedEmail = 'student@example.com';
      const hardcodedPassword = 'password';
      
      if (email === hardcodedEmail && password === hardcodedPassword) {
        Alert.alert('Success', 'Authentication successful.');
        // Reset form fields after successful sign-in
        setEmail('');
        setPassword('');
      } else {
        throw new Error('Invalid email or password.');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giriş Yap Öğrenci</Text>
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
        <TouchableOpacity onPress={handleSignIn} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Giriş</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Sign Up Student')}>
          <Text style={styles.loginText}>Hesabın yok mu? Kayıt Ol</Text>
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
    backgroundColor: '#f0f0f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    width: '100%',
    borderRadius: 5,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonsContainer: {
    marginTop: 20,
  },
  buttonContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'blue', // Buton metninin rengini beyaz yapmak için color özelliğini ekledim
  },
  loginText: {
    color: 'blue',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

export default SignInViewStudent;
