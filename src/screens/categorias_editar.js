import { Text, View, Button, StyleSheet, TextInput} from 'react-native';
import React, { useState } from 'react'
import api from "../config/api"


export default function App({route, navigation}) {
    
    const [text, onChangeText] = useState();

  const editar = async () => {

    const categoria = {
        "id": route.params.id,
        "nome" : text,
        "descricao": text
    }

    rota = "/categorias/atualizar/"+route.params.id+"/";
  
    await api.post(rota, categoria)
      .then((response) => { 
        navigation.navigate("Categorias")
      }).catch((err) => { 
        if (err.response) { 
          Alert.alert("Erro", err.response.data.mensagem);
        } else {
          Alert.alert("Erro", "Erro: Tente mais tarde!");
        }
      });
  }
  
    return (
        <View style={estilo.tela}>
            <Text>EDIÇÃO</Text>
            
            <Text>Nome atual: {route.params.nome}</Text>
            <Text>Novo nome: </Text>
            <TextInput 
            onChangeText={onChangeText}
            
            />

            <Text>Descrição atual: {route.params.descricao}</Text>
            <Text>Nova descrição: </Text>
            <TextInput 
            onChangeText={onChangeText}
            
            />
            
            <Button title="Editar"
            onPress={() => {
                editar()
            }} />
        </View>
    );
};


const estilo = StyleSheet.create({
    tela: {
        flex: 1,
        padding: 20
    }
})