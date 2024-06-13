import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import apiJoint from '../service/apiJoint';

const ForgotMyPasswordView = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);

  
  const handleSendCode = async() => {
    try {
        const data = {
          email:email,
        }
        await apiJoint.sendCode(data);
        setIsCodeSent(true);
    } catch (error) {
        console.error('Error sending code:', error);
        Alert.alert('Error', 'Failed to send code.');
    }
};

  
  const handleResetPassword = async() => {
    if (!code || !newPassword || !confirmPassword) {
        Alert.alert('Hata', 'Lütfen tüm alanları doldurun.');
        return;
      }
    
    if (newPassword !== confirmPassword) {
      Alert.alert('Hata', 'Şifreler eşleşmiyor.');
      return;
    }
    try {
      const data = {
        email:email,
        password:newPassword,
        verificationCode:code,
      }
      await apiJoint.sendInfo(data);
      setEmail('');
      setNewPassword('');
      setConfirmPassword('');
      setCode('');     
  } catch (error) {
      console.error('Error sending code:', error);
      Alert.alert('Error', 'Failed to send code.');
  }

    
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
          />
          <Button title="Kod Gönder" onPress={handleSendCode} />
        </>
      ) : (
        <>
        <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email Adresi"
          />
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
