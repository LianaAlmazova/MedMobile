import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextInputField from '../components/TextInputField';
import Button from '../components/Button';

export default function OTPScreen({ navigation }) {
  const [otp, setOtp] = useState('');

  const handleLogin = () => {
    // Логика для проверки одноразового пароля
    navigation.replace('Main'); // Переход к основному приложению с вкладками после успешного ввода пароля
  };

  const handleResendOtp = () => {
    // Логика для повторной отправки одноразового пароля
    console.log("Одноразовый пароль отправлен снова");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Введите одноразовый пароль</Text>
      <TextInputField
        label="Одноразовый пароль"
        placeholder="XX XX"
        value={otp}
        onChangeText={setOtp}
      />
      <Button title="Войти" onPress={handleLogin} />
      <Button title="Отправить пароль еще раз" onPress={handleResendOtp} style={styles.spaceTop}/>
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
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  spaceTop: {
    marginTop: 10,
  }
});
