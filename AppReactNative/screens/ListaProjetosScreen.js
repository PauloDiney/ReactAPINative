import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button, ScrollView, Alert } from "react-native";
import axios from "axios";
import { useNavigation } from '@react-navigation/native';

const ListaProjetosScreen = () => {
  const navigation = useNavigation();
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    const fetchProjetos = async () => {
      try {
        const resposta = await axios.get('http://localhost:3001/exer/projetos');
        setProjetos(resposta.data);
      } catch (error) {
        console.error(error);
        alert('Erro ao carregar projetos.');
      }
    };
    fetchProjetos();
  }, []);

  return (
    <ScrollView style={{flex:1}} contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Lista de Projetos</Text>
      <Button title="Cadastrar Novo Projeto" onPress={() => navigation.navigate('CadastroProjeto')} color="#b71c1c" />
      <FlatList
        data={projetos}
        keyExtractor={item => item.id?.toString() || Math.random().toString()}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>Equipe: {item.equipe}</Text>
            <Text>Descrição: {item.descricao}</Text>
            <Text>Valor: {item.valor}</Text>
            <Text>Data Início: {item.datainicio}</Text>
            <Text>Data Fim: {item.datafinal}</Text>
            <Text>Status: {item.status}</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
              <Button title="Editar" color="#b71c1c" onPress={() => navigation.navigate('EditarProjeto', { projeto: item })} />
              <Button title="Excluir" color="#b71c1c" onPress={async () => {
                try {
                  await axios.delete(`http://localhost:3001/exer/projetos/${item.id}`);
                  Alert.alert('Projeto excluído!');
                  setProjetos(projetos.filter(p => p.id !== item.id));
                } catch (error) {
                  Alert.alert('Erro ao excluir projeto');
                }
              }} />
              <Button title="Ver Detalhes" color="#b71c1c" onPress={() => navigation.navigate('DetalheProjeto', { projeto: item })} />
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={{textAlign:'center', marginTop:20}}>Nenhum projeto cadastrado.</Text>}
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

export default ListaProjetosScreen;
