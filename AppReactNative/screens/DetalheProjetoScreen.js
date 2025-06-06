import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const DetalheProjetoScreen = ({ route }) => {
  const { projeto } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Detalhes do Projeto</Text>
      <Text style={styles.label}>Nome:</Text>
      <Text style={styles.valor}>{projeto.nome}</Text>
      <Text style={styles.label}>Equipe:</Text>
      <Text style={styles.valor}>{projeto.equipe}</Text>
      <Text style={styles.label}>Descrição:</Text>
      <Text style={styles.valor}>{projeto.descricao}</Text>
      <Text style={styles.label}>Valor:</Text>
      <Text style={styles.valor}>{projeto.valor}</Text>
      <Text style={styles.label}>Data Início:</Text>
      <Text style={styles.valor}>{projeto.datainicio}</Text>
      <Text style={styles.label}>Data Fim:</Text>
      <Text style={styles.valor}>{projeto.datafinal}</Text>
      <Text style={styles.label}>Status:</Text>
      <Text style={styles.valor}>{projeto.status}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  label: { fontWeight: "bold", marginTop: 10 },
  valor: { marginBottom: 10, fontSize: 16 },
});

export default DetalheProjetoScreen;
