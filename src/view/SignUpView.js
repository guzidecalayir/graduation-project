import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const SignUpView = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.jpeg')} style={styles.logo} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Sign Up Student')}
      >
        <Text style={styles.buttonText}>Öğrenci Kayıt</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Sign Up Philanthropist')}
      >
        <Text style={styles.buttonText}>Yardımsever Kayıt</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Sign Up Restaurant')}
      >
        <Text style={styles.buttonText}>Restoran Kayıt</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 200, // Adjust the width as needed
    backgroundColor: '#3498db',
    borderColor: '#2980b9',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  logo: {
    width: 200, // Adjust the width here
    height: 200,
    aspectRatio: 1,
    marginBottom: 30,
  },
});
