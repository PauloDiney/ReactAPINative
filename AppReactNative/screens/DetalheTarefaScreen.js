import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const DetalheTarefaScreen = ({ route }) => {
  const { tarefa } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Detalhes da Tarefa</Text>
      <Text style={styles.label}>Nome:</Text>
      <Text style={styles.valor}>{tarefa.nome}</Text>
      <Text style={styles.label}>Membro:</Text>
      <Text style={styles.valor}>{tarefa.membro}</Text>
      <Text style={styles.label}>Projeto:</Text>
      <Text style={styles.valor}>{tarefa.projeto}</Text>
      <Text style={styles.label}>Data Início:</Text>
      <Text style={styles.valor}>{tarefa.dataStart}</Text>
      <Text style={styles.label}>Data Fim:</Text>
      <Text style={styles.valor}>{tarefa.dataEnd}</Text>
      <Text style={styles.label}>Descrição:</Text>
      <Text style={styles.valor}>{tarefa.descricao}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  label: { fontWeight: "bold", marginTop: 10 },
  valor: { marginBottom: 10, fontSize: 16 },
});

export default DetalheTarefaScreen;
