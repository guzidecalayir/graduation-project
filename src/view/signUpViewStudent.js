import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Switch, TouchableOpacity, ScrollView} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


const SignUpViewStudent = ({navigation}) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthDate, setSelectedDate] = useState(null);
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);
  const [university, setUniName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPolicyChecked, setIsPolicyChecked] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);


  const handleSignUp = () => {
    if (!name || !surname || !birthDate|| !university || !email || !phoneNumber || !password || !confirmPassword ) {
      Alert.alert('Error', 'Lütfen * içeren tüm alanları doldurun.');
      return;
    }
    if (!isPolicyChecked || !isTermsChecked) {
        Alert.alert('Error', 'Lütfen izinleri onaylayın.');
        return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Şifreler eşleşmiyor. Lütfen aynı şifreyi tekrar girin.');
      return;
    }else{
      const studentData = {
         name:name,
         surname: surname,
         birthDate: birthDate,
         school: university,
         phoneNumber: phoneNumber,
         email:email,
         password:password,
      };
       console.log(studentData);
       StudentViewModel.mapStudentData(studentData);
   }

    

    setName('');
    setSurname('');
    setSelectedDate(new Date());
    setUniName('');
    setPhoneNumber('');
    setEmail('');
    setPassword('');
    setIsPolicyChecked(false);
    setIsTermsChecked(false);
  };

  const handleCancel = () => {
    setName('');
    setSurname('');
    setSelectedDate(new Date());
    setUniName('');
    setPhoneNumber('');
    setEmail('');
    setPassword('');
    setIsPolicyChecked(false);
    setIsTermsChecked(false);
    Alert.alert('Bilgi', 'Kayıt Olma İptal Edildi.');
  };

  const showDateTimePicker = () => {
    setIsDateTimePickerVisible(true);
  };

  const hideDateTimePicker = () => {
    setIsDateTimePickerVisible(false);
  };

  const handleDateChange = (event, date) => {
    setSelectedDate(date || birthDate);
    hideDateTimePicker();
  };
      


return (
  <View style={styles.container}>
    <Text style={styles.title}>Kayıt Ol Öğrenci</Text>
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
    <View style={styles.dateInputContainer}>
      <TextInput
        style={styles.dateInput}
        placeholder={birthDate ? '' : 'Doğum Tarihi*'}
        value={birthDate ? birthDate.toLocaleDateString() : ''}
        editable={false}
        onPressIn={showDateTimePicker}
      />
      {isDateTimePickerVisible && (
        <DateTimePicker
          value={birthDate || new Date()}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
    
    <TextInput
      style={styles.input}
      placeholder="Üniversite Adı*"
      value={university}
      onChangeText={(text) => setUniName(text)}
    />
    <TextInput
      style={styles.input}
      placeholder="Üniversite Email*"
      value={email}
      onChangeText={(text) => setEmail(text)}
      keyboardType="email-address"
    />
    <TextInput
      style={styles.input}
      placeholder="Telefon Numarası*"
      value={phoneNumber}
      onChangeText={(text) => setPhoneNumber(text)}
      keyboardType="numeric"
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
        <Button title="Kayıt Ol" onPress={handleSignUp} color="blue"/>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Vazgeç" onPress={handleCancel} color="gray" />
      </View>
    </View>
    <View style={styles.buttonsContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Sign In Student')}>
        <Text style={styles.loginText}>Hesabın var mı? Giriş yap</Text>
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
    marginBottom: 8,
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

export default SignUpViewStudent;
