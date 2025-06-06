import React from "react";
import { View, Text } from "react-native";

const HomeScreen = () => {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:22, fontWeight:'bold'}}>Bem-vindo ao Gerenciador de Projetos!</Text>
            <Text style={{marginTop:10}}>Use o menu para acessar membros, projetos e tarefas.</Text>
        </View>
    );
}

export default HomeScreen;
