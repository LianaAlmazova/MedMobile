import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { doc, getDoc } from 'firebase/firestore';
import db from '../constants/firebaseConfig'; // Убедитесь, что путь к firebaseConfig правильный
import { Image } from 'react-native';


export default function DoctorDetailsScreen({ route, navigation }) {
  const { doctorId } = route.params; // Используем переданный ID врача
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  // Функция для загрузки данных врача
  const fetchDoctorDetails = async () => {
    try {
      const docRef = doc(db, 'doctors', doctorId); // Подставляем ID врача
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setDoctor(docSnap.data()); // Сохраняем данные врача
      } else {
        console.error('Документ не найден!');
      }
    } catch (error) {
      console.error('Ошибка загрузки данных врача:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctorDetails();
  }, []);

  const handleBookAppointment = () => {
    navigation.navigate('AppointmentBooking', { doctorId });
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#40E0D0" />
      </View>
    );
  }

  if (!doctor) {
    return (
      <View style={styles.container}>
        <Text>Ошибка: Врач не найден.</Text>
      </View>
    );
  }

  console.log("Врач:", doctor)
  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <Image
            source={{ uri: doctor.photoUrl }} // Используем URL из базы данных
            style={styles.photo} // Добавим стиль для изображения
            resizeMode="cover" // Это обеспечит корректное отображение изображения
          />
      </View>
      <Text style={styles.doctorName}>{doctor.name}</Text>
      <Text style={styles.doctorDetails}>
        {`Специализация: ${doctor.specialization}\nСтаж: ${doctor.experience}`}
      </Text>
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
  photoContainer: {
    width: 150,
    height: 150,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  photo: {
    width: '100%', // Заполняет контейнер полностью
    height: '100%',
    borderRadius: 10, // Закругленные углы
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
