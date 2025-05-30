import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScen';
import ListaUsuariosScreen from './screens/ListaUsuariosScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

export default function App() {
  const Tab = createBottomTabNavigator();

  function Tabs(){
    return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="ListaUsuarios" component={ListaUsuariosScreen} />
      </Tab.Navigator>
    );
  }

  const Drawer = createDrawerNavigator();

  function DrawerNavigation(){
    return(
      <Drawer.Navigator>
        <Drawer.Screen name="Inicio" component={Tabs} />
        <Drawer.Screen name="ListaUsuarios" component={ListaUsuariosScreen} />
      </Drawer.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}

