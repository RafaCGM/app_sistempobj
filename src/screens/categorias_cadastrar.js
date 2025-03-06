import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import { useState } from 'react';
import api from '../config/api';

export default function App({navigation}){

    const [nome, alterarNome] = useState("");
    const [descricao, alterarDescricao] = useState("");

    const cadastrar = () => {
        const categoria = {
            "nome" : nome,
            "descricao": descricao
        }

        api.put("/categorias/adicionar/", categoria)
        .then((response) => {
            navigation.navigate("Categorias");
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <ImageBackground 
            source={require("../../assets/ifrn.jpg")} 
            style={style1.background} 
            resizeMode="cover"
        >
            <View style={style1.container}>
                <Text style={style2.texto_principal}>Cadastro de Categoria</Text>

                <Text style={style2.label}>Digite o Nome:</Text>
                <TextInput
                    style={style2.input}
                    onChangeText={alterarNome}
                    value={nome}
                    placeholder="Nome da Categoria"
                    placeholderTextColor="#aaa"
                />

                <Text style={style2.label}>Digite a Descrição:</Text>
                <TextInput
                    style={style2.input}
                    onChangeText={alterarDescricao}
                    value={descricao}
                    placeholder="Descrição da Categoria"
                    placeholderTextColor="#aaa"
                />

                <Button 
                    title="Cadastrar" 
                    onPress={cadastrar} 
                    color="#007A33"
                />
                
            </View>
        </ImageBackground>
    );
}

const style1 = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    container: {
        width: '90%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
    },
});

const style2 = StyleSheet.create({
    texto_principal: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },

    label: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 10,
        width: '100%',
    },

    input: {
        width: '100%',
        padding: 10,
        fontSize: 16,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#fff',
    },
});
