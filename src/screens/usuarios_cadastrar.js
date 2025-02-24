import { View, Text, TextInput, Button } from 'react-native'
import { use, useState } from 'react'
import api from '../config/api'

export default function App({navigation}){
    const [ matricula, alterarMatricula ] = useState("");
    const [ nome, alterarNome ] = useState("");
    const [ username, alterarUsername ] = useState("");
    const [ telefone, alterarTelefone ] = useState("");
    const [ email, alterarEmail ]= useState("");
    const [ password1, alterarPassword1 ] = useState("");
    const [ password2, alterarPassword2 ] = useState("");

    const cadastrar = () => {
        const usuario = {
            "matricula" : matricula,
            "nome" : nome,
            "username" : username,
            "telefone" : telefone,
            "email" : email,
            "password1" : password1,
            "password2" : password2
        }

        api.put("/usuarios/adicionar/", usuario)
        .then((response) =>{
            navigation.navigate("Usuarios");
        })
        .catch((err) => {

        })
    }

    return(
        <View>
            <Text>Tela de cadastro de Usuário</Text>

            <Text>Digite a sua Matrícula:</Text>
            <TextInput onChangeText={alterarMatricula}/>
            <Text>Digite o seu nome completo:</Text>
            <TextInput onChangeText={alterarNome}/>
            <Text>Digite o seu nome de usuário:</Text>
            <TextInput onChangeText={alterarUsername}/>
            <Text>Telefone:</Text>
            <TextInput onChangeText={alterarTelefone}/>
            <Text>Email:</Text>
            <TextInput onChangeText={alterarEmail}/>
            <Text>Senha:</Text>
            <TextInput onChangeText={alterarPassword1}/>
            <Text>Repita sua senha:</Text>
            <TextInput onChangeText={alterarPassword2}/>

            <Button title='Cadastrar' onPress={cadastrar}/>
        </View>
    )
}