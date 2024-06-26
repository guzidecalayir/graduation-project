
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Switch, TouchableOpacity, ScrollView} from 'react-native';
import PhilanthropistViewModel from '../viewmodel/PhilanthropistViewModel';


const SignUpViewPhilanthropist = ({navigation}) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPolicyChecked, setIsPolicyChecked] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  
  const handleSignUp = () => {

  
   
    if (!name || !surname ||  !email || !password || !confirmPassword ) {
      Alert.alert('Error', 'Lütfen * içeren tüm alanları doldurun.');
      return;
    }else if (!isPolicyChecked || !isTermsChecked) {
        Alert.alert('Error', 'Lütfen izinleri onaylayın.');
        return;
    }else if (password !== confirmPassword) {
      Alert.alert('Error', 'Şifreler eşleşmiyor. Lütfen aynı şifreyi tekrar girin.');
      return;
    }else{
       const philanthropistData = {
          firstName:name,
          lastName:surname,
          email:email,
          phoneNumber:phoneNumber,
          password:password,
          totalDonation:0
       };
        console.log(philanthropistData);
        PhilanthropistViewModel.mapPhilanthropistData(philanthropistData);
        setName('');
        setSurname('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setPhoneNumber('');
        setIsPolicyChecked(false);
        setIsTermsChecked(false);

    }

    
    
    
  };

  const handleCancel = () => {
    setName('');
    setSurname('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setPhoneNumber('');
    setIsPolicyChecked(false);
    setIsTermsChecked(false);
    Alert.alert('Bilgi', 'Kayıt Olma İptal Edildi.');
  };
  
  
            
return (
  <ScrollView contentContainerStyle={styles.scrollView}>
    <View style={styles.container}>
      <Text style={styles.title}>Kayıt Ol Yardımsever </Text>
      <TextInput
        style={styles.input}
        placeholder="Ad*"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Soyad*"
        value={surname}
        onChangeText={(text) => setSurname(text)}
      />
       <TextInput
        style={styles.input}
        placeholder="Telefon Numarası* (5**)"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        keyboardType="numeric"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Email*"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre*"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Şifreyi Onayla*"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry={true}
      />

      <View style={styles.switchContainer}>
        <View style={styles.switchAndLabel}>
          <Switch
            value={isPolicyChecked}
            onValueChange={setIsPolicyChecked}
          />
          <Text style={styles.label}>KVKK metnini okudum ve kabul ediyorum.</Text>
        </View>
        <View style={styles.switchAndLabel}>
          <Switch
            value={isTermsChecked}
            onValueChange={setIsTermsChecked}
          />
          <Text style={styles.label}>İletişim izinlerini onaylıyorum.</Text>
        </View>
      </View>

      
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Button title="Kayıt Ol" onPress={handleSignUp} color="blue" />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Vazgeç" onPress={handleCancel} color="gray" />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Sign In Philanthropist')}>
        <Text style={styles.loginText}>Hesabın var mı? Giriş yap</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    scrollView: {
      flexGrow: 1,
    },
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
      dateInputContainer: {
        position: 'relative',
        width: '100%',
      },
      dateInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
      },
      
      switchContainer: {
        width: '100%',
        marginBottom: 10,
      },
      switchAndLabel: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom:8,
      },
      label: {
        marginLeft: 8,
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
        padding: 5,
      },
      loginText: {
        marginTop: 20,
        color: 'blue',
        textDecorationLine: 'underline',
      },
});

export default SignUpViewPhilanthropist;
