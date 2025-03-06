import { StyleSheet, View, Text, Image, Button, ImageBackground } from "react-native";

export default function Index({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/ifrn.jpg")}
      style={style1.background}
      resizeMode="cover"
    >
      <View style={style1.container}>
        {/* Logo */}
        <View style={style1.logoContainer}>
          <Image style={style2.imagem} source={require("../../assets/iconecang.png")} />
        </View>

        {/* Texto principal */}
        <Text style={style2.texto_principal}> SISTEMA DE EMPRÉSTIMOS DE OBJETO </Text>

        {/* Botões */}
        <View style={style1.button}>
          <View style={style1.buttonWrapper}>
            <Button title='Usuários' onPress={() => navigation.navigate("Usuarios")} color="#007A33" />
          </View>
          <View style={style1.buttonWrapper}>
            <Button title='Objetos' onPress={() => navigation.navigate("Objetos")} color="#007A33" />
          </View>
          <View style={style1.buttonWrapper}>
            <Button title='Categorias' onPress={() => navigation.navigate("Categorias")} color="#007A33" />
          </View>
        </View>
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

  logoContainer: {
    marginBottom: 20, // Distância entre logo e o texto
  },

  button: {
    width: '100%',
    marginTop: 20, // Distância entre o texto e os botões
  },

  buttonWrapper: {
    marginBottom: 15, // Distância entre os botões
  },

  box: {
    marginTop: 0,
    marginBottom: 150,
  }
});

const style2 = StyleSheet.create({
  imagem: {
    width: 250,
    height: 120,
    resizeMode: 'contain',
    borderRadius: 30, // Arredonda as bordas da imagem da logo
  },

  texto_principal: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20, // Distância entre o texto e os botões
    borderRadius: 8, // Bordas arredondadas no texto
  },
});
