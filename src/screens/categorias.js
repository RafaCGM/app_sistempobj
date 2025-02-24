import { View, Text, Button, FlatList } from "react-native";
import { useEffect, useState } from "react";
import api from '../config/api'

export default function App({navigation}){

    const [categorias, listarCategorias] = useState([])

    const getCategorias = async () => {
        await api.get("/categorias/listar/")
        .then((response)=>{
            listarCategorias(response.data);
        })
        .catch((err)=>{

        })
    }

    useEffect(()=>{
        getCategorias();

    },[]);

    return(
    <View>
        <Text> Categorias </Text>

        <Button
                title='Cadastrar'
                onPress={()=>{
                    navigation.navigate("Categoria_cadastrar")
                }}
            
            />

            
            <FlatList 
            data={categorias}
            keyExtractor={({id})=>id}
            renderItem={({item})=>(
                <Text>Nome: {item.nome} || Descrição: {item.descricao}</Text>
            )}
            />
    </View>
    );
}