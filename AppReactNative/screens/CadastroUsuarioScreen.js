import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView } from "react-native";
import axios from "axios";

const CadastroUsuarioScreen = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [formacao, setFormacao] = useState("");
  const [equipe, setEquipe] = useState("");
  const [contato, setContato] = useState("");
  const [cargo, setCargo] = useState("");

  const cadastrar = async () => {
    if (!nome || !formacao || !equipe || !contato || !cargo) {
      Alert.alert("Preencha todos os campos!");
      return;
    }
    try {
      await axios.post("http://localhost:3001/exer/membros", { nome, formacao, equipe, contato, cargo });
      Alert.alert("Membro cadastrado com sucesso!");
      setNome("");
      setFormacao("");
      setEquipe("");
      setContato("");
      setCargo("");
      if (navigation) navigation.goBack();
    } catch (error) {
      Alert.alert("Erro ao cadastrar membro");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Cadastro de Membro</Text>
      <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Formação" value={formacao} onChangeText={setFormacao} />
      <TextInput style={styles.input} placeholder="Equipe" value={equipe} onChangeText={setEquipe} />
      <TextInput style={styles.input} placeholder="Contato" value={contato} onChangeText={setContato} />
      <TextInput style={styles.input} placeholder="Cargo" value={cargo} onChangeText={setCargo} />
      <View style={styles.buttonContainer}>
        <Button title="Cadastrar" color="#b71c1c" onPress={cadastrar} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, justifyContent: "center", backgroundColor: '#fff5f5' },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center", color: '#b71c1c' },
  input: { borderWidth: 1, borderColor: "#b71c1c", borderRadius: 5, padding: 10, marginBottom: 15, backgroundColor: '#ffebee' },
  buttonContainer: { marginTop: 10, borderRadius: 5, overflow: 'hidden' },
});

export default CadastroUsuarioScreen;
