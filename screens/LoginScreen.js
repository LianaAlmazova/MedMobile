import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextInputField from '../components/TextInputField';
import Button from '../components/Button';

export default function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState('');

  console.log("LoginScreen загружен"); // Отладка

  const handleGetPassword = () => {
    navigation.navigate('OTP');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Авторизация</Text>
      <TextInputField
        label="Телефон"
        placeholder="+7 (xxx) xxx xx xx"
        value={phone}
        onChangeText={setPhone}
      />
      <Button title="Получить пароль" onPress={handleGetPassword} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});
