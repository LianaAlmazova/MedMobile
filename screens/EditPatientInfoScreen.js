import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function EditPatientInfoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Введите свои персональные данные</Text>
      
      <Text style={styles.label}>Фамилия</Text>
      <TextInput style={styles.input} />
      
      <Text style={styles.label}>Имя</Text>
      <TextInput style={styles.input} />
      
      <Text style={styles.label}>Отчество</Text>
      <TextInput style={styles.input} />
      
      <Text style={styles.label}>Дата рождения</Text>
      <TextInput style={styles.input} placeholder="Выберите дату" editable={false} />
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Ввести</Text>
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
    backgroundColor: '#dcdcdc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#ADD8E6',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
