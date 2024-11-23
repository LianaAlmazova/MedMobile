import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import db from '../constants/firebaseConfig'; // Убедитесь, что путь к firebaseConfig правильный
import { Image } from 'react-native';


export default function DoctorsScreen({ navigation }) {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);

    // Функция для загрузки данных врачей
    const fetchDoctors = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'doctors')); // Получаем коллекцию "doctors"
            console.log(querySnapshot)
            const doctorsList = querySnapshot.docs.map(doc => ({
                id: doc.id, // ID документа
                ...doc.data() // Данные врача
            }));
            console.log("DoctorList:", doctorsList)
            setDoctors(doctorsList);
        } catch (error) {
            console.error('Ошибка загрузки списка врачей:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDoctors();
    }, []);

    const renderDoctor = ({ item }) =>{
        console.log(item.id)
        return (
        <View style={styles.doctorItem}>
            <View style={styles.photoContainer}>
                <Image
                source={{ uri: item.photoUrl }} // Используем URL из базы данных
                style={styles.photo} // Добавим стиль для изображения
                resizeMode="cover" // Это обеспечит корректное отображение изображения
            />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.doctorName}>{item.name}</Text>
                <Text style={styles.doctorSpecialty}>{item.specialization}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('DoctorDetails', { doctorId: item.id })}
                >
                    <Text style={styles.buttonText}>Подробнее</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    };

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#40E0D0" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Наши врачи</Text>
            <Text style={styles.subHeader}>Специализация врача</Text>
            <FlatList
                data={doctors}
                renderItem={renderDoctor}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0'
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    subHeader: {
        fontSize: 16,
        marginBottom: 10
    },
    doctorItem: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10
    },
    photoContainer: {
        width: 80,
        height: 80,
        backgroundColor: '#e0e0e0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginRight: 15
    },
    photo: {
        width: '100%', // Заполняет контейнер полностью
        height: '100%',
        borderRadius: 10, // Закругленные углы
    },
    infoContainer: {
        flex: 1
    },
    doctorName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    doctorSpecialty: {
        fontSize: 14,
        color: '#555',
        marginBottom: 10
    },
    button: {
        backgroundColor: '#ADD8E6',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: 100
    },
    buttonText: {
        color: '#fff'
    }
});
