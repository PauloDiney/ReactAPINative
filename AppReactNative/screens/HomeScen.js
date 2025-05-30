import React, { useState } from "react";
import { View } from "react-native";
import {Button, TextInput, Text} from "react-native-paper";
import axios from "axios";

const HomeScreen = () =>{

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const salvarUsuario = async() => {
        try{
            await axios.post('https://localhost:3000/api/usuarios', {
                nome, email, senha
            });

            alert('Usuário salvo com sucesso!');
        }catch(error) {
            console.error(error);
            alert('Erro ao salvar usuário. Tente novamente.');
        }

        setNome('');
        setEmail('');
        setSenha('');
    }


    return (
        <View>
            <Text>Registrar Usuario</Text>
            <TextInput
                label="Nome"
                value={nome}
                onChangeText={text => setNome(text)}
                mode="outlined">

            </TextInput>
            <TextInput
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                mode="outlined"
                keyboardType="email-address">
            </TextInput>
            <TextInput
                label="Senha"
                value={senha}
                onChangeText={text => setSenha(text)}
                mode="outlined"
                secureTextEntry={true}>
            </TextInput>

            <Button 
                mode="contained"
                onPress={salvarUsuario}>
                    Salvar
            </Button>
            
        </View>
    );

}

export default HomeScreen;