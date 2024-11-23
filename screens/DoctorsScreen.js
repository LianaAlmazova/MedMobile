import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const doctors = [
    { id: '1', name: 'Ф.И.О. врача', specialty: 'терапевт' },
    { id: '2', name: 'Ф.И.О. врача', specialty: 'терапевт' }
];

export default function DoctorsScreen({ navigation }) {
    const renderDoctor = ({ item }) => (
        <View style={styles.doctorItem}>
            <View style={styles.photoContainer}>
                <Text>Photo</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.doctorName}>{item.name}</Text>
                <Text style={styles.doctorSpecialty}>{item.specialty}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('DoctorDetails', { doctor: item })}
                >
                    <Text style={styles.buttonText}>Подробнее</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Наши врачи</Text>
            <Text style={styles.subHeader}>Специализация врача</Text>
            <FlatList data={doctors} renderItem={renderDoctor} keyExtractor={(item) => item.id} />
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
