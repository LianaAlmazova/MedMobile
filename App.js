import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import db from "./constants/firebaseConfig"
import LoginScreen from './screens/LoginScreen';
import OTPScreen from './screens/OTPScreen';
import NewsScreen from './screens/NewsScreen';
import DoctorsScreen from './screens/DoctorsScreen';
import DoctorDetailsScreen from './screens/DoctorDetailsScreen';
import AppointmentBookingScreen from './screens/AppointmentBookingScreen';
import AppointmentDetailsScreen from './screens/AppointmentDetailsScreen';
import PatientRecordsScreen from './screens/PatientRecordsScreen';
import EditPatientInfoScreen from './screens/EditPatientInfoScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

console.log('Firebase Initialized:', db);

function RecordsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PatientRecords" component={PatientRecordsScreen} options={{ title: 'Мои записи' }} />
      <Stack.Screen name="EditPatientInfo" component={EditPatientInfoScreen} options={{ title: 'Редактировать данные' }} />
      <Stack.Screen name="AppointmentDetails" component={AppointmentDetailsScreen} options={{ title: 'Информация о приёме' }} />
    </Stack.Navigator>
  );
}

// Стек для вкладки "Врачи"
function DoctorsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Doctors" component={DoctorsScreen} options={{ title: 'Наши врачи' }} />
      <Stack.Screen name="DoctorDetails" component={DoctorDetailsScreen} options={{ title: 'Информация о враче' }} />
      <Stack.Screen name="AppointmentBooking" component={AppointmentBookingScreen} options={{ title: 'Записаться на приём' }} />
      <Stack.Screen name="AppointmentDetails" component={AppointmentDetailsScreen} options={{ title: 'Информация о приёме' }} />
    </Stack.Navigator>
  );
}

// Стек для вкладки "Записаться"
function AppointmentStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AppointmentBooking" component={AppointmentBookingScreen} options={{ title: 'Записаться на приём' }} />
      <Stack.Screen name="AppointmentDetails" component={AppointmentDetailsScreen} options={{ title: 'Информация о приёме' }} />
    </Stack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={NewsScreen} options={{ title: 'Главная' }} />
      <Tab.Screen name="Appointments" component={AppointmentStack} options={{ title: 'Записаться' }} />
      <Tab.Screen name="DoctorsStack" component={DoctorsStack} options={{ title: 'Врачи' }} />
      <Tab.Screen name="Records" component={RecordsStack} options={{ title: 'Мои записи' }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OTP" component={OTPScreen} options={{ title: 'Ввод данных пользователя' }} />
        <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
