import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Button, ScrollView, Alert } from "react-native";
import axios from "axios";
import { useNavigation } from '@react-navigation/native';

const ListaUsuariosScreen = () => {
  const [usuarios, setUsuarios] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const resposta = await axios.get('http://localhost:3001/exer/membros');
        setUsuarios(resposta.data);
      } catch (error) {
        console.error(error);
        alert('Erro ao carregar membros.');
      }
    };
    fetchUsuarios();
  }, []);

  return (
    <ScrollView style={{flex:1}} contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Lista de Membros</Text>
      <Button title="Cadastrar Novo Membro" onPress={() => navigation.navigate('CadastroUsuario')} color="#b71c1c" />
      <FlatList
        data={usuarios}
        keyExtractor={item => item.id?.toString() || Math.random().toString()}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>Formação: {item.formacao}</Text>
            <Text>Equipe: {item.equipe}</Text>
            <Text>Contato: {item.contato}</Text>
            <Text>Cargo: {item.cargo}</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
              <Button title="Editar" color="#b71c1c" onPress={() => navigation.navigate('EditarUsuario', { usuario: item })} />
              <Button title="Excluir" color="#b71c1c" onPress={async () => {
                try {
                  await axios.delete(`http://localhost:3001/exer/membros/${item.id}`);
                  Alert.alert('Membro excluído!');
                  setUsuarios(usuarios.filter(u => u.id !== item.id));
                } catch (error) {
                  Alert.alert('Erro ao excluir membro');
                }
              }} />
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={{textAlign:'center', marginTop:20}}>Nenhum membro cadastrado.</Text>}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff5f5' },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center", color: '#b71c1c' },
  input: { borderWidth: 1, borderColor: "#b71c1c", borderRadius: 5, padding: 10, marginBottom: 15, backgroundColor: '#ffebee' },
  label: { fontWeight: 'bold', marginTop: 10, marginBottom: 5, color: '#b71c1c' },
  card: { backgroundColor: '#ffebee', borderRadius: 8, padding: 15, marginBottom: 15, elevation: 2, borderColor: '#b71c1c', borderWidth: 1 },
  nome: { fontWeight: 'bold', fontSize: 18, marginBottom: 5, color: '#b71c1c' },
});

export default ListaUsuariosScreen;