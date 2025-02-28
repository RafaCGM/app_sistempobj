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

    const removerCategoria = async (id) => {
        rota = "/categorias/remover/"+id+"/"
        await api.delete(rota)
          .then((response) => { 
            getCategorias();
          }).catch((err) => { 
            if (err.response) { 
              Alert.alert("Erro", err.response.data.mensagem);
            } else { 
              Alert.alert("Erro", "Erro: Tente mais tarde!");
            }
          });
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
                    <Text>

                        Nome: {item.nome}
                        ||
                        <Button title="Editar"
                                onPress={() => {
                                    navigation.navigate("Categoria_editar", {id: item.id, nome: item.nome, descricao: item.descricao})
                                }} 
                        />
                        ||
                        <Button title="Remover"
                                onPress={() => {
                                    removerCategoria(item.id)
                                }}
                        />
                    
                    </Text>
                )}
            />
    </View>
);
}