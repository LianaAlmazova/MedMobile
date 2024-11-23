import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function AppointmentBookingScreen({ route, navigation }) {
  const doctor = route.params?.doctor?.name || 'Выберите врача';
  const [branchAddress, setBranchAddress] = useState('Уфа, ул. Уфимская, д.1');
  const [appointmentDate, setAppointmentDate] = useState('31 июля 2024 г. 15.00');

  const handleBookAppointment = () => {
    navigation.push('AppointmentDetails', {
      doctor,
      branchAddress,
      appointmentDate,
      status: 'Ожидается',
    });
  };  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Записаться на приём</Text>
      
      <Text style={styles.label}>Врач</Text>
      <TextInput style={styles.input} value={doctor} editable={false} />
      
      <Text style={styles.label}>Адрес филиала</Text>
      <TextInput style={styles.input} value={branchAddress} editable={false} />
      
      <Text style={styles.label}>Выберите дату приёма</Text>
      <TextInput style={styles.input} value={appointmentDate} editable={false} />
      
      <TouchableOpacity style={styles.button} onPress={handleBookAppointment}>
        <Text style={styles.buttonText}>Записаться</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  backButton: {
    fontSize: 16,
    color: '#007AFF',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#40E0D0',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
