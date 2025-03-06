import { Text, View, Button, StyleSheet, TextInput, ImageBackground} from 'react-native';
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
      <ImageBackground 
          source={require("../../assets/ifrn.jpg")} 
          style={style1.background} 
          resizeMode="cover"
      >
          <View style={style1.container}>
              <Text style={style2.texto_principal}>Edição de categoria</Text>
              
              <Text style={style2.label}>Nome atual: {route.params.nome}</Text>
              <Text style={style2.label}>Novo nome: </Text>
              <TextInput 
                style={style2.input}
                onChangeText={onChangeText}
                placeholder="Nome da Categoria"
                placeholderTextColor="#aaa"
              />

              <Text style={style2.label}>Descrição atual: {route.params.descricao}</Text>
              <Text style={style2.label}>Nova descrição: </Text>
              <TextInput 
                style={style2.input}
                onChangeText={onChangeText}
                placeholder="Descrição"
                placeholderTextColor="#aaa"
              />
              
              <Button title="Editar"
              onPress={() => {
                  editar()
              }} 
              color="#007A33"
              />

          </View>
      </ImageBackground>
    );
};


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