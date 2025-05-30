import React, {useEffect, useState} from "react";
import { View, Text, FlatList, Button} from "react-native";
import axios from "axios";


const ListaUsuariosScreen = () => {


    const [usuarios, setUsuarios] = useState([]);

    useEffect(() =>{
        const dados = async() => {
            try{
                const resposta = await axios.get('https://localhost:3000/api/usuarios');
                setUsuarios(resposta.data);
            }catch(error) {
                console.error(error);
                alert('Erro ao carregar usuários. Tente novamente.');
            }
        }
        dados();
    }, []);


    return (
        <View>
            <FlatList 
            data={usuarios}
            renderItem={({item}) => (
                <View>
                    <Text>{item.nome}</Text>
                </View>
            ) }>

            </FlatList>

        </View>
    );
}

export default ListaUsuariosScreen;