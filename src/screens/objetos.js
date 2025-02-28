import { View, Text, FlatList } from "react-native";
import { useEffect, useState } from "react";
import api from '../config/api'

export default function App({navigation}){

    const [objetos, listarObjetos] = useState([])

    const getObjetos = async () => {
        await api.get("/objetos/listar/")
        .then((response)=>{
            listarObjetos(response.data);
        })
        .catch((err)=>{

        })
    }

    useEffect(()=>{
        getObjetos();

    },[]);

    return(
    <View>
        <Text> Lista de objetos </Text>
       
            <FlatList 
            data={objetos}
            keyExtractor={({id})=>id}
            renderItem={({item})=>(
                <Text>Nome: {item.nome} || Disponibilidade: {item.disponivel}</Text>
            )}
            />

    </View>
    );
}