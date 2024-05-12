
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Switch} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const signUpViewStudent = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);
  const [university, setUniName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPolicyChecked, setIsPolicyChecked] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const isUniversityEmail = (email) => {
    return email.endsWith('@university.edu'); // Üniversitenin e-posta alan adını kontrol ediyoruz
  };

  const handleSignUp = () => {
    if (!name || !surname || !selectedDate|| !university || !email || !password || !confirmPassword ) {
      Alert.alert('Error', 'Lütfen * içeren tüm alanları doldurun.');
      return;
    }

    if (!isUniversityEmail(email)) {
      Alert.alert('Error', 'Lütfen bir üniversite e-mail adresi kullanın.');
      return;
    }


    if (!isPolicyChecked || !isTermsChecked) {
        Alert.alert('Error', 'Lütfen izinleri onaylayın.');
        return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Şifreler eşleşmiyor. Lütfen aynı şifreyi tekrar girin.');
      return;
    }

    // Kayıt işlemini gerçekleştir
    console.log('name:', name);
    console.log('surname :', surname);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Selected Date:', selectedDate);

    setName('');
    setSurname('');
    setSelectedDate(new Date());
    setUniName('');
    setEmail('');
    setPassword('');
    setIsPolicyChecked(false);
    setIsTermsChecked(false);

    Alert.alert('Başarılı', 'Kayıt olma işlemi başarılı.');
  };

  const handleCancel = () => {
    setName('');
    setSurname('');
    setSelectedDate(new Date());
    setUniName('');
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
    setSelectedDate(date || selectedDate);
    hideDateTimePicker();
  };
      
            

return (
    <View style={styles.container}>
      <Text style={styles.title}>Kayıt Ol</Text>
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
        placeholder={selectedDate ? '' : 'Doğum Tarihi*'}
        value={selectedDate ? selectedDate.toLocaleDateString() : ''}
        editable={false}
        onPressIn={showDateTimePicker}
        />
         {isDateTimePickerVisible && (
         <DateTimePicker
          value={selectedDate || new Date()}
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
          <Button title="Kayıt Ol" onPress={handleSignUp} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Vazgeç" onPress={handleCancel} color="gray" />
        </View>
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
      }
});

export default signUpViewStudent;