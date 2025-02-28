import { View, Text, FlatList } from "react-native";
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
        <Text> Lista de usuários </Text>
       
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