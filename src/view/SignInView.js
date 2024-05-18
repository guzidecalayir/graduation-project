import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const SignInView = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Sign In Student')}
      >
        <Text style={styles.buttonText}>Öğrenci Girişi</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Sign In Philanthropist')}
      >
        <Text style={styles.buttonText}>Yardımsever Girişi</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Sign In Restaurant')}
      >
        <Text style={styles.buttonText}>Restoran Girişi</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInView;

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
});

