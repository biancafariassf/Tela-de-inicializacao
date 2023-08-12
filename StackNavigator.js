import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProfileScreen from './screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import SavedScreen from './screens/SavedScreen';
import AudioScreen from './screens/AudioScreen';
import Carousel from './components/Carousel'; // Importe o componente Carousel
import HotelScreen from './screens/HotelScreen';
import ComercioScreen from './screens/ComercioScreen';
import ZonaPerigoScreen from './screens/ZonaPerigoScreen';
import ConverterScreen from './screens/ConverterScreen';
import PlacaScreen from './screens/PlacaScreen';
import OpcoesScreen from './screens/OpcoesScreen';
import HotelCrud from './screens/HotelCrud';
import PontoturisticoCrud from './screens/PontoturisticoCrud';
import TransporteCrud from './screens/TransporteCrud';
import PlacasCrud from './screens/PlacasCrud';
import ComercioCrud from './screens/ComercioCrud';
import PacotesCrud from './screens/PacotesCrud';
import ZonaPerigoCrud from './screens/ZonaPerigoCrud';
import PacotesScreen from './screens/PacotesScreen';
import AdminScreen from './screens/AdminScreen';
import InicializarScreen from './screens/InicializarScreen';
import LoginScreen from './screens/LoginScreen';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Componente que representa a TabBar
function TabBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#B4C1FC' },
        tabBarLabelStyle: { color: 'white' },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black',
        headerShown: false, 
      }}
    >
      {/* Defina as abas aqui */}
      <Tab.Screen
        name="Home"
        component={HomeScreenStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (focused ? <Ionicons name="airplane-sharp" size={24} color="#3865E0" /> : <Ionicons name="airplane-outline" size={24} color="#3865E0" />),
        }}
      />
      <Tab.Screen
        name="Roteiro"
        component={SavedScreen}
        options={{
          tabBarLabel: 'Roteiro',
          tabBarIcon: ({ focused }) => (focused ? <MaterialCommunityIcons name="bag-suitcase" size={24} color="#3865E0" /> : <MaterialCommunityIcons name="bag-suitcase-outline" size={24} color="#3865E0" />),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ focused }) => (focused ? <Ionicons name="person" size={24} color="#3865E0" /> : <Ionicons name="person-outline" size={24} color="#3865E0" />),
        }}
      />
    </Tab.Navigator>
  );
}

// Componente que representa o StackNavigator para a aba 
function HomeScreenStack() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="InicializarScreen" component={InicializarScreen} options={{ headerShown: false }} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AudioScreen" component={AudioScreen} options={{ headerShown: false }} />
      <Stack.Screen name="HotelScreen" component={HotelScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PacotesScreen" component={PacotesScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ComercioScreen" component={ComercioScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ZonaPerigoScreen" component={ZonaPerigoScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ConverterScreen" component={ConverterScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PlacaScreen" component={PlacaScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AdminScreen" component={AdminScreen} options={{ headerShown: false }} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Opcoes" component={OpcoesScreen} />
      <Stack.Screen name="HotelCrud" component={HotelCrud} />
        <Stack.Screen name="PontoturisticoCrud" component={PontoturisticoCrud} />
        <Stack.Screen name="TransporteCrud" component={TransporteCrud} />
        <Stack.Screen name="PlacasCrud" component={PlacasCrud} />
        <Stack.Screen name="ComercioCrud" component={ComercioCrud} />
        <Stack.Screen name="PacotesCrud" component={PacotesCrud} />
        <Stack.Screen name="ZonaPerigoCrud" component={ZonaPerigoCrud} />
        
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <TabBar />
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({});
