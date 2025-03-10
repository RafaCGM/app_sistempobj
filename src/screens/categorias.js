import { View, Text, Button, FlatList, StyleSheet, ImageBackground, Alert } from "react-native";
import { useEffect, useState } from "react";
import api from '../config/api';

export default function App({navigation}){

    const [categorias, listarCategorias] = useState([])

    const getCategorias = async () => {
        await api.get("/categorias/listar/")
        .then((response)=>{
            listarCategorias(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const removerCategoria = async (id) => {
        const rota = "/categorias/remover/"+id+"/"
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
        <ImageBackground 
            source={require("../../assets/ifrn.jpg")} 
            style={style1.background} 
            resizeMode="cover"
        >
            <View style={style1.container}>
                <Text style={style2.texto_principal}>Categorias</Text>
                <View style={style1.buttonWrapper}>
                    <Button style={style1.buttonStyle}
                        title="Cadastrar"
                        onPress={() => navigation.navigate("Categoria_cadastrar")}
                        color="#007A33"
                    />
                </View>
            
                <FlatList 
                    data={categorias}
                    keyExtractor={({id})=>id}
                    renderItem={({item})=>(
                        <View style={style1.itemContainer}>
                            <Text style={style2.itemText}>Nome: {item.nome}</Text>
                            <Text style={style2.itemText}>Descrição: {item.descricao}</Text>
                            <View style={style1.buttonWrapper}>
                                <Button 
                                    title="Editar"
                                    onPress={() => navigation.navigate("Categoria_editar", {id: item.id, nome: item.nome, descricao: item.descricao})}
                                    color="#007A33"
                                />
                            </View>
                            <View style={style1.buttonWrapper}>
                                <Button 
                                    title="Remover"
                                    onPress={() => removerCategoria(item.id)}
                                    color="#c94b4b"
                                />
                            </View>
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

    itemContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 15,
        padding: 10,
        width: '100%',
    },

    buttonWrapper: {
        marginBottom: 10,
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
