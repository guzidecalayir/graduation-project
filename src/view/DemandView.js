import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'

const DemandView = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')
  const [subject, setSubject] = useState('')
  const [description, setDescription] = useState('')
  const [demands, setDemands] = useState([])

  const handleSubmit = () => {
    // Alanların dolu olup olmadığını kontrol edin
    if (!name || !email || !phone || !category || !subject || !description) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurunuz.')
      return
    }

    const newDemand = {
      id: (demands.length + 1).toString(),
      title: subject,
      status: 'Beklemede'
    }
    setDemands([...demands, newDemand])
    // Formu temizle
    setName('')
    setEmail('')
    setPhone('')
    setCategory('')
    setSubject('')
    setDescription('')
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.view}>
        <Text style={styles.header}>Talep Gönder</Text>
        <TextInput
          style={styles.input}
          placeholder="Ad Soyad"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="E-posta Adresi"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Telefon Numarası"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
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
        <Text style={styles.header}>Önceki Taleplerim</Text>
        {demands.length === 0 ? (
          <Text style={styles.noDemandsText}>Henüz talebiniz yok</Text>
        ) : (
          <FlatList
            data={demands}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.demandItem}>
                <Text style={styles.demandTitle}>{item.title}</Text>
                <Text style={styles.demandStatus}>{item.status}</Text>
              </View>
            )}
          />
        )}
      </View>
    </ScrollView>
  )
}

export default DemandView

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
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
  demandItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  demandTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  demandStatus: {
    fontSize: 16,
    color: 'gray'
  },
  noDemandsText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
    marginTop: 10
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
