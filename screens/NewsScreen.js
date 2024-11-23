import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NewsScreen() {
    console.log('NewsScreen рендерится');
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <View style={styles.logo}>
                    <Text>Logo</Text>
                </View>
            </View>

            <View style={styles.newsItem}>
                <View style={styles.photo}>
                    <Text>Photo</Text>
                </View>
                <Text style={styles.newsTitle}>Заголовок новости</Text>
                <Text style={styles.newsDescription}>Описание новости</Text>
            </View>

            <View style={styles.newsItem}>
                <View style={styles.photo}>
                    <Text>Photo</Text>
                </View>
                <Text style={styles.newsTitle}>Заголовок новости</Text>
                <Text style={styles.newsDescription}>Описание новости</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0'
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20
    },
    logo: {
        width: 80,
        height: 80,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    newsItem: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 3
    },
    photo: {
        height: 150,
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    newsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    newsDescription: {
        fontSize: 14,
        color: '#555'
    }
});
