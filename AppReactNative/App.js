import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ListaUsuariosScreen from './screens/ListaUsuariosScreen';
import CadastroUsuarioScreen from './screens/CadastroUsuarioScreen';
import DetalheUsuarioScreen from './screens/DetalheUsuarioScreen';
import ListaProjetosScreen from './screens/ListaProjetosScreen';
import CadastroProjetoScreen from './screens/CadastroProjetoScreen';
import DetalheProjetoScreen from './screens/DetalheProjetoScreen';
import ListaTarefasScreen from './screens/ListaTarefasScreen';
import CadastroTarefaScreen from './screens/CadastroTarefaScreen';
import DetalheTarefaScreen from './screens/DetalheTarefaScreen';
import EditarUsuarioScreen from './screens/EditarUsuarioScreen';
import EditarProjetoScreen from './screens/EditarProjetoScreen';
import EditarTarefaScreen from './screens/EditarTarefaScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  function ListaUsuariosStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="ListaUsuarios" component={ListaUsuariosScreen} options={{ title: 'Membros' }} />
        <Stack.Screen name="CadastroUsuario" component={CadastroUsuarioScreen} options={{ title: 'Cadastrar Membro' }} />
        <Stack.Screen name="DetalheUsuario" component={DetalheUsuarioScreen} options={{ title: 'Detalhes do Membro' }} />
        <Stack.Screen name="EditarUsuario" component={EditarUsuarioScreen} options={{ title: 'Editar Membro' }} />
      </Stack.Navigator>
    );
  }

  function ListaProjetosStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="ListaProjetos" component={ListaProjetosScreen} options={{ title: 'Projetos' }} />
        <Stack.Screen name="CadastroProjeto" component={CadastroProjetoScreen} options={{ title: 'Cadastrar Projeto' }} />
        <Stack.Screen name="DetalheProjeto" component={DetalheProjetoScreen} options={{ title: 'Detalhes do Projeto' }} />
        <Stack.Screen name="EditarProjeto" component={EditarProjetoScreen} options={{ title: 'Editar Projeto' }} />
      </Stack.Navigator>
    );
  }

  function ListaTarefasStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="ListaTarefas" component={ListaTarefasScreen} options={{ title: 'Tarefas' }} />
        <Stack.Screen name="CadastroTarefa" component={CadastroTarefaScreen} options={{ title: 'Cadastrar Tarefa' }} />
        <Stack.Screen name="DetalheTarefa" component={DetalheTarefaScreen} options={{ title: 'Detalhes da Tarefa' }} />
        <Stack.Screen name="EditarTarefa" component={EditarTarefaScreen} options={{ title: 'Editar Tarefa' }} />
      </Stack.Navigator>
    );
  }

  function Tabs(){
    return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Membros" component={ListaUsuariosStack} />
        <Tab.Screen name="Projetos" component={ListaProjetosStack} />
        <Tab.Screen name="Tarefas" component={ListaTarefasStack} />
      </Tab.Navigator>
    );
  }

  const Drawer = createDrawerNavigator();

  function DrawerNavigation(){
    return(
      <Drawer.Navigator>
        <Drawer.Screen name="Inicio" component={Tabs} />
        <Drawer.Screen name="Membros" component={ListaUsuariosStack} />
        <Drawer.Screen name="Projetos" component={ListaProjetosStack} />
        <Drawer.Screen name="Tarefas" component={ListaTarefasStack} />
      </Drawer.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}

