import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const DetalheUsuarioScreen = ({ route }) => {
  const { usuario } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Detalhes do Membro</Text>
      <Text style={styles.label}>Nome:</Text>
      <Text style={styles.valor}>{usuario.nome}</Text>
      <Text style={styles.label}>Formação:</Text>
      <Text style={styles.valor}>{usuario.formacao}</Text>
      <Text style={styles.label}>Equipe:</Text>
      <Text style={styles.valor}>{usuario.equipe}</Text>
      <Text style={styles.label}>Contato:</Text>
      <Text style={styles.valor}>{usuario.contato}</Text>
      <Text style={styles.label}>Cargo:</Text>
      <Text style={styles.valor}>{usuario.cargo}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  label: { fontWeight: "bold", marginTop: 10 },
  valor: { marginBottom: 10, fontSize: 16 },
});

export default DetalheUsuarioScreen;
