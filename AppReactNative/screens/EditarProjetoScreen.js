import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView } from "react-native";
import axios from "axios";

const EditarProjetoScreen = ({ route, navigation }) => {
  const { projeto } = route.params;
  const [nome, setNome] = useState("");
  const [equipe, setEquipe] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [datainicio, setDatainicio] = useState("");
  const [datafinal, setDatafinal] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    async function fetchProjeto() {
      try {
        const res = await axios.get(`http://localhost:3001/exer/projetos/${projeto.id}`);
        const p = res.data[0];
        setNome(p.nome);
        setEquipe(p.equipe);
        setDescricao(p.descricao);
        setValor(p.valor);
        setDatainicio(p.datainicio);
        setDatafinal(p.datafinal);
        setStatus(p.status);
      } catch (error) {
        Alert.alert("Erro ao buscar projeto");
      }
    }
    fetchProjeto();
  }, [projeto.id]);

  const editar = async () => {
    if (!nome || !equipe || !descricao || !valor || !datainicio || !datafinal || !status) {
      Alert.alert("Preencha todos os campos!");
      return;
    }
    try {
      await axios.put(`http://localhost:3001/exer/projetos/${projeto.id}`, { nome, equipe, descricao, valor, datainicio, datafinal, status });
      Alert.alert("Projeto editado com sucesso!");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Erro ao editar projeto");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Editar Projeto</Text>
      <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Equipe" value={equipe} onChangeText={setEquipe} />
      <TextInput style={styles.input} placeholder="Descrição" value={descricao} onChangeText={setDescricao} />
      <TextInput style={styles.input} placeholder="Valor" value={valor} onChangeText={setValor} keyboardType="numeric" />
      <Text style={styles.label}>Data Início</Text>
      <TextInput style={styles.input} placeholder="AAAA-MM-DD" value={datainicio} onChangeText={setDatainicio} />
      <Text style={styles.label}>Data Fim</Text>
      <TextInput style={styles.input} placeholder="AAAA-MM-DD" value={datafinal} onChangeText={setDatafinal} />
      <TextInput style={styles.input} placeholder="Status" value={status} onChangeText={setStatus} />
      <View style={styles.buttonContainer}>
        <Button title="Salvar" color="#b71c1c" onPress={editar} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, justifyContent: "center", backgroundColor: '#fff5f5' },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center", color: '#b71c1c' },
  input: { borderWidth: 1, borderColor: "#b71c1c", borderRadius: 5, padding: 10, marginBottom: 15, backgroundColor: '#ffebee' },
  label: { fontWeight: 'bold', marginTop: 10, marginBottom: 5, color: '#b71c1c' },
  buttonContainer: { marginTop: 10, borderRadius: 5, overflow: 'hidden' },
});

export default EditarProjetoScreen;
