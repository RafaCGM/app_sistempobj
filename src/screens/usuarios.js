import { View, Text, FlatList, StyleSheet, ImageBackground } from "react-native";
import { useEffect, useState } from "react";
import api from '../config/api';

export default function App({navigation}){

    const [usuarios, listarUsuarios] = useState([])

    const getUsuarios = async () => {
        await api.get("/usuarios/listar/")
        .then((response)=>{
            listarUsuarios(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getUsuarios();
    },[]);

    return (
        <ImageBackground 
            source={require("../../assets/ifrn.jpg")} 
            style={style1.background} 
            resizeMode="cover"
        >
            <View style={style1.container}>
                <Text style={style2.texto_principal}>Lista de Usuários</Text>
                <FlatList 
                    data={usuarios}
                    keyExtractor={({id})=>id}
                    renderItem={({item})=>( 
                        <View style={style1.itemContainer}>
                            <Text style={style2.itemText}>Nome: {item.nome}</Text>
                            <Text style={style2.itemText}>E-mail: {item.email}</Text>
                        </View>
                    )}
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
        justifyContent: 'center', // Centraliza o conteúdo verticalmente
        alignItems: 'center', // Centraliza o conteúdo horizontalmente
    },

    container: {
        width: '90%',  // Ajuste o tamanho do container
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fundo branco semi-transparente para contraste
        borderRadius: 20, // Arredonda as bordas do fundo
        padding: 20, // Espaçamento interno
        alignItems: 'center', // Centraliza o conteúdo horizontalmente
    },

    itemContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 15,
        padding: 10,
        width: '100%',
    },

    buttonWrapper: {
        marginBottom: 15,
    },
});

const style2 = StyleSheet.create({
    texto_principal: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        
        padding: 10,
        borderRadius: 8,
    },

    itemText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 5,
    },
});
