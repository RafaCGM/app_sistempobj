import { View, Text, TextInput, Button } from 'react-native'
import { useState } from 'react'
import api from '../config/api'

export default function App({navigation}){
    const [ nome, alterarNome ] = useState("");
    const [ descricao, alterarDescricao ] = useState("")

    const cadastrar = () => {
        const categoria = {
            "nome" : nome,
            "descricao": descricao
        }

        api.put("/categorias/adicionar/", categoria)
        .then((response) =>{
            navigation.navigate("Categorias");
        })
        .catch((err) => {

        })
    }

    return(
        <View>
            <Text>Tela de cadastro de categoria</Text>
            <Text>Digite o Nome:</Text>
            <TextInput onChangeText={alterarNome}/>
            <Text>Digite a Descrição:</Text>
            <TextInput onChangeText={alterarDescricao}/>
            <Button title='Cadastrar' onPress={cadastrar}/>
        </View>
    )
}