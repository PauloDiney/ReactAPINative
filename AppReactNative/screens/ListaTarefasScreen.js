import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Button, ScrollView, Alert } from "react-native";
import axios from "axios";
import { useNavigation } from '@react-navigation/native';

const ListaTarefasScreen = () => {
  const navigation = useNavigation();
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    const fetchTarefas = async () => {
      try {
        const resposta = await axios.get('http://localhost:3001/exer/tarefas');
        setTarefas(resposta.data);
      } catch (error) {
        console.error(error);
        alert('Erro ao carregar tarefas.');
      }
    };
    fetchTarefas();
  }, []);

  return (
    <ScrollView style={{flex:1}} contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Lista de Tarefas</Text>
      <Button title="Cadastrar Nova Tarefa" onPress={() => navigation.navigate('CadastroTarefa')} color="#b71c1c" />
      <FlatList
        data={tarefas}
        keyExtractor={item => item.id?.toString() || Math.random().toString()}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>Membro: {item.membro}</Text>
            <Text>Projeto: {item.projeto}</Text>
            <Text>Data Início: {item.dataStart}</Text>
            <Text>Data Fim: {item.dataEnd}</Text>
            <Text>Descrição: {item.descricao}</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
              <Button title="Editar" color="#b71c1c" onPress={() => navigation.navigate('EditarTarefa', { tarefa: item })} />
              <Button title="Excluir" color="#b71c1c" onPress={async () => {
                try {
                  await axios.delete(`http://localhost:3001/exer/tarefas/${item.id}`);
                  Alert.alert('Tarefa excluída!');
                  setTarefas(tarefas.filter(t => t.id !== item.id));
                } catch (error) {
                  Alert.alert('Erro ao excluir tarefa');
                }
              }} />
              <Button title="Ver Detalhes" color="#b71c1c" onPress={() => navigation.navigate('DetalheTarefa', { tarefa: item })} />
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={{textAlign:'center', marginTop:20}}>Nenhuma tarefa cadastrada.</Text>}
      />
    </ScrollView>
  );
};

const styles = {
  container: { flex: 1, padding: 20, backgroundColor: '#fff5f5' },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center", color: '#b71c1c' },
  card: { backgroundColor: '#ffebee', borderRadius: 8, padding: 15, marginBottom: 15, elevation: 2, borderColor: '#b71c1c', borderWidth: 1 },
  nome: { fontWeight: 'bold', fontSize: 18, marginBottom: 5, color: '#b71c1c' },
};

export default ListaTarefasScreen;
