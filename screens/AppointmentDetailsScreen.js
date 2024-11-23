import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function AppointmentDetailsScreen({ route, navigation }) {
  const { doctor, branchAddress, appointmentDate, status } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Информация о приёме</Text>
      
      <Text style={styles.label}>Врач</Text>
      <TextInput style={styles.input} value={doctor} editable={false} />
      
      <Text style={styles.label}>Адрес филиала</Text>
      <TextInput style={styles.input} value={branchAddress} editable={false} />
      
      <Text style={styles.label}>Дата приёма</Text>
      <TextInput style={styles.input} value={appointmentDate} editable={false} />
      
      <Text style={styles.label}>Статус приёма</Text>
      <TextInput style={styles.input} value={status} editable={false} />
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
});
