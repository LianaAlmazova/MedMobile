import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function DoctorDetailsScreen({ route, navigation }) {
  const { doctor } = route.params;

  const handleBookAppointment = () => {
    // Переход на экран записи на приём
    navigation.navigate('AppointmentBooking', { doctor });
  };

  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <Text>Photo</Text>
      </View>
      <Text style={styles.doctorName}>{doctor.name}</Text>
      <Text style={styles.doctorDetails}>Специализация, стаж, образование, опыт работы</Text>
      <TouchableOpacity style={styles.button} onPress={handleBookAppointment}>
        <Text style={styles.buttonText}>Записаться на приём</Text>
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
  photoContainer: {
    width: 150,
    height: 150,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  doctorName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  doctorDetails: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
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
