import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const SignInViewStudent = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {login} = useContext(AuthContext);

  const userType = 'student';

  

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
        <TouchableOpacity onPress={() => login(email, password, userType)} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Giriş</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer2}>
        <TouchableOpacity onPress={() => navigation.navigate('Sign Up Student')}>
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


export default SignInViewStudent;
