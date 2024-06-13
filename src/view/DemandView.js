import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React, { useState, useContext } from 'react'
import { Picker } from '@react-native-picker/picker'
import { AuthContext } from '../context/AuthContext'
import apiJoint from '../service/apiJoint'


const DemandView = () => {
  
  const [category, setCategory] = useState('')
  const [subject, setSubject] = useState('')
  const [description, setDescription] = useState('')

  const { userToken } = useContext(AuthContext);

  const handleSubmit = async () => {
    if (!category || !subject || !description) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurunuz.')
      return
    }
    
    const token = userToken;
    const newDemand = {
      requestType: category,
      requestSubType: subject,
      request: description,
    }

    try {
      await apiJoint.sendDemand(newDemand, token)
      // Clear the input fields after successful submission
      setCategory('')
      setSubject('')
      setDescription('')
    } catch (error) {
      Alert.alert('Hata', 'Talep gönderilirken bir hata oluştu.')
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.header}>Talep Gönder</Text>
  
          <Text style={styles.label}>Talep Kategorisi</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={category}
              onValueChange={(itemValue) => setCategory(itemValue)}
            >
              <Picker.Item label="Öneri" value="Öneri" />
              <Picker.Item label="Şikayet" value="Şikayet" />
              <Picker.Item label="Destek" value="Destek" />
              <Picker.Item label="Diğer" value="Diğer" />
            </Picker>
          </View>
          
          <Text style={styles.label}>Talep Konusu</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={subject}
              onValueChange={(itemValue) => setSubject(itemValue)}
            >
              <Picker.Item label="Ürün/Hizmet" value="Ürün/Hizmet" />
              <Picker.Item label="Teknik Sorun" value="Teknik Sorun" />
              <Picker.Item label="Hesap Sorunu" value="Hesap Sorunu" />
              <Picker.Item label="Diğer" value="Diğer" />
            </Picker>
          </View>
          
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Talep Açıklaması"
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
          />
          
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Gönder</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default DemandView

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top'
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  view: {
    flex: 1,
  }
})
