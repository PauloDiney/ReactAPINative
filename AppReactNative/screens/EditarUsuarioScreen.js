import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView } from "react-native";
import axios from "axios";

const EditarUsuarioScreen = ({ route, navigation }) => {
  const { usuario } = route.params;
  const [nome, setNome] = useState("");
  const [formacao, setFormacao] = useState("");
  const [equipe, setEquipe] = useState("");
  const [contato, setContato] = useState("");
  const [cargo, setCargo] = useState("");

  useEffect(() => {
    async function fetchUsuario() {
      try {
        const res = await axios.get(`http://localhost:3001/exer/membros/${usuario.id}`);
        const u = res.data[0];
        setNome(u.nome);
        setFormacao(u.formacao);
        setEquipe(u.equipe);
        setContato(u.contato);
        setCargo(u.cargo);
      } catch (error) {
        Alert.alert("Erro ao buscar membro");
      }
    }
    fetchUsuario();
  }, [usuario.id]);

  const editar = async () => {
    if (!nome || !formacao || !equipe || !contato || !cargo) {
      Alert.alert("Preencha todos os campos!");
      return;
    }
    try {
      await axios.put(`http://localhost:3001/exer/membros/${usuario.id}`, { nome, formacao, equipe, contato, cargo });
      Alert.alert("Membro editado com sucesso!");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Erro ao editar membro");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Editar Membro</Text>
      <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Formação" value={formacao} onChangeText={setFormacao} />
      <TextInput style={styles.input} placeholder="Equipe" value={equipe} onChangeText={setEquipe} />
      <TextInput style={styles.input} placeholder="Contato" value={contato} onChangeText={setContato} />
      <TextInput style={styles.input} placeholder="Cargo" value={cargo} onChangeText={setCargo} />
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
  buttonContainer: { marginTop: 10, borderRadius: 5, overflow: 'hidden' },
});

export default EditarUsuarioScreen;
