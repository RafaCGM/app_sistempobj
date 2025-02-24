import { View, Text, Button, FlatList } from "react-native";
import { useEffect, useState } from "react";
import api from '../config/api'

export default function App({navigation}){

    const [usuarios, listarUsuarios] = useState([])

    const getUsuarios = async () => {
        await api.get("/usuarios/listar/")
        .then((response)=>{
            listarUsuarios(response.data);
        })
        .catch((err)=>{

        })
    }

    useEffect(()=>{
        getUsuarios();

    },[]);

    return(
    <View>
        <Text> Usuários </Text>

        <Button
                title='Cadastrar'
                onPress={()=>{
                    navigation.navigate("Usuarios_cadastrar")
                }}
            
            />

            
            <FlatList 
            data={usuarios}
            keyExtractor={({id})=>id}
            renderItem={({item})=>(
                <Text>Nome: {item.nome} || E-mail: {item.email}</Text>
            )}
            />
    </View>
    );
}