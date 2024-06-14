import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { AuthContext } from '../context/AuthContext';

export default function App() {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanData, setScanData] = useState(null);
  const { userToken } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text>Please grant camera permissions to app.</Text>
      </View>
    );
  }

  const handleBarCodeScanned = async ({ type, data }) => {
    console.log('Data:', data); // Check if data is being passed correctly
    alert(`QR kod tarandı.`);
    setScanData(data);
    console.log(`Data: ${data}`);
    const scannData = {
      inti: data,
    };
    await decrease(scannData, userToken);
  };
  const decrease = async (scannData, userToken) => {
    try {
      console.log(scannData)
      const response = await fetch('https://studentdesk.azurewebsites.net/api/Student/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify(scannData), // Pass data as an object
      });
  
      //...
    } catch (error) {
      console.error(error);
      // Handle the error
    }
  };
  

  return (
    <View style={styles.container}>
      <BarCodeScanner
        style={StyleSheet.absoluteFillObject}
        onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
      />
      {scanData && (
        <View style={styles.bottomView}>
          <TouchableOpacity onPress={() => setScanData(undefined)}>
            <View style={styles.scanButton}>
              <Text style={styles.scanButtonText}>Tekrar Tara?</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  scanButton: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'white',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  scanButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});