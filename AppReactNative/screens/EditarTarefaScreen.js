import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView } from "react-native";
import axios from "axios";

const EditarTarefaScreen = ({ route, navigation }) => {
  const { tarefa } = route.params;
  const [nome, setNome] = useState("");
  const [membro, setMembro] = useState("");
  const [projeto, setProjeto] = useState("");
  const [dataStart, setDataStart] = useState("");
  const [dataEnd, setDataEnd] = useState("");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    async function fetchTarefa() {
      try {
        const res = await axios.get(`http://localhost:3001/exer/tarefas/${tarefa.id}`);
        const t = res.data[0];
        setNome(t.nome);
        setMembro(t.membro);
        setProjeto(t.projeto);
        setDataStart(t.dataStart);
        setDataEnd(t.dataEnd);
        setDescricao(t.descricao);
      } catch (error) {
        Alert.alert("Erro ao buscar tarefa");
      }
    }
    fetchTarefa();
  }, [tarefa.id]);

  const editar = async () => {
    if (!nome || !membro || !projeto || !dataStart || !dataEnd || !descricao) {
      Alert.alert("Preencha todos os campos!");
      return;
    }
    try {
      await axios.put(`http://localhost:3001/exer/tarefas/${tarefa.id}`, { nome, membro, projeto, dataStart, dataEnd, descricao });
      Alert.alert("Tarefa editada com sucesso!");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Erro ao editar tarefa");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Editar Tarefa</Text>
      <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Membro" value={membro} onChangeText={setMembro} />
      <TextInput style={styles.input} placeholder="Projeto" value={projeto} onChangeText={setProjeto} />
      <Text style={styles.label}>Data Início</Text>
      <TextInput style={styles.input} placeholder="AAAA-MM-DD" value={dataStart} onChangeText={setDataStart} />
      <Text style={styles.label}>Data Fim</Text>
      <TextInput style={styles.input} placeholder="AAAA-MM-DD" value={dataEnd} onChangeText={setDataEnd} />
      <TextInput style={styles.input} placeholder="Descrição" value={descricao} onChangeText={setDescricao} />
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

export default EditarTarefaScreen;
