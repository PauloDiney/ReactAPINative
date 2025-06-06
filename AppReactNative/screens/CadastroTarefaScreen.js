import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import axios from "axios";

const CadastroTarefaScreen = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [membro, setMembro] = useState("");
  const [projeto, setProjeto] = useState("");
  const [dataStart, setDataStart] = useState("");
  const [dataEnd, setDataEnd] = useState("");
  const [descricao, setDescricao] = useState("");

  const cadastrar = async () => {
    if (!nome || !membro || !projeto || !dataStart || !dataEnd || !descricao) {
      Alert.alert("Preencha todos os campos!");
      return;
    }
    try {
      await axios.post("http://localhost:3001/exer/tarefas", { nome, membro, projeto, dataStart, dataEnd, descricao });
      Alert.alert("Tarefa cadastrada com sucesso!");
      setNome(""); setMembro(""); setProjeto(""); setDataStart(""); setDataEnd(""); setDescricao("");
      if (navigation) navigation.goBack();
    } catch (error) {
      Alert.alert("Erro ao cadastrar tarefa");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Tarefa</Text>
      <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Membro" value={membro} onChangeText={setMembro} />
      <TextInput style={styles.input} placeholder="Projeto" value={projeto} onChangeText={setProjeto} />
      <TextInput style={styles.input} placeholder="Data Início" value={dataStart} onChangeText={setDataStart} />
      <TextInput style={styles.input} placeholder="Data Fim" value={dataEnd} onChangeText={setDataEnd} />
      <TextInput style={styles.input} placeholder="Descrição" value={descricao} onChangeText={setDescricao} />
      <Button title="Cadastrar" onPress={cadastrar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: '#fff5f5' },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center", color: '#b71c1c' },
  input: { borderWidth: 1, borderColor: "#b71c1c", borderRadius: 5, padding: 10, marginBottom: 15, backgroundColor: '#ffebee' },
  label: { fontWeight: 'bold', marginTop: 10, marginBottom: 5, color: '#b71c1c' },
});

export default CadastroTarefaScreen;
