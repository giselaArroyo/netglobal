import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Fichaje from './src/screens/Fichaje';
import LoginScreen from './src/screens/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Horarios from './src/screens/Horarios';
import Reportes from './src/screens/Reportes';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './src/store/store';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RootNavigator from './src/Navigation/rootNavigation';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
const [perfil, setPerfil] = useState({})

useEffect(() => {
  getPerfil()
},[])

async function getPerfil() {
  try {
    const perfil = await AsyncStorage.getItem("user")
    setPerfil(perfil)
  } catch (error) {
    console.log(error);
  }
}

  return (
<<<<<<< HEAD
    <NavigationContainer>
      
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={LoginScreen} options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Fichaje" component={Fichaje} options={{
          tabBarLabel: 'Fichaje',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="check" color={color} size={26} />
          ),
        }}/>
          <Tab.Screen name="Horarios" component={Horarios} options={{
          tabBarLabel: 'Horarios',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={26} />
          ),
        }}/>
          <Tab.Screen name="Reportes" component={Reportes} options={{
          tabBarLabel: 'Reportes',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="clipboard" color={color} size={26} />
          ),
        }}/>
   
      </Tab.Navigator>
    </NavigationContainer>
=======



  <Provider store={store}>
    {perfil? (<RootNavigator/>): (<LoginScreen/>)}
   </Provider>


>>>>>>> produccion
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
