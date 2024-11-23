import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const appointments = [
  { id: '1', date: '31.07.24 г. 15.00', doctor: 'Иванов И.И.' },
  { id: '2', date: '01.09.24 г. 10.00', doctor: 'Иванов И.И.' },
];

export default function PatientRecordsScreen({ navigation }) {
  const renderAppointment = ({ item }) => (
    <View style={styles.appointmentItem}>
      <Text>Запись {item.date}</Text>
      <Text>Врач: {item.doctor}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AppointmentDetails', item)}
      >
        <Text style={styles.buttonText}>Подробнее</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.patientInfo}>
        <Text>Ф.И.О. пациента</Text>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate('EditPatientInfo')}
        >
          <Text style={styles.buttonText}>Редактировать</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={appointments}
        renderItem={renderAppointment}
        keyExtractor={(item) => item.id}
        style={styles.appointmentsList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  patientInfo: {
    backgroundColor: '#dcdcdc',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: '#ADD8E6',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  appointmentsList: {
    flex: 1,
  },
  appointmentItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#ADD8E6',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
});
