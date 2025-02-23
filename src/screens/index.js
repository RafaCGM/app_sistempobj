import { StyleSheet, View, Text, Image, Button } from "react-native";

export default function Index({navigation}){
    return(
    <View style={style1.container}>
      <View style={style1.box}>
        <Image style={style2.imagem} source={require("../../assets/iconecang.png")}/>
      </View>

      <Text style={style2.texto_principal}> SISTEMA DE EMPRÉSTIMOS DE OBJETO </Text>
      
      <View>
        <Button title='Usuários' onPress={()=>navigation.navigate("Usuários")} />
        <Button title='Objetos' onPress={()=>navigation.navigate("Objetos")} />
        <Button title='Categorias' onPress={()=>navigation.navigate("Categorias")} />
        <Button title='Empréstimos' onPress={()=>navigation.navigate("Empréstimos")} />
        <Button title='Reservas' onPress={()=>navigation.navigate("Reservas")} />
      </View>

    </View>
    );
}

const style1 = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  box: {
    marginTop: 50,
    marginBottom: 30,
    
  }
});

const style2 = StyleSheet.create({
  imagem: {
    width: 350,
    height: 100,
    
  },

  texto_principal: {
    fontSize: 20, 
    fontWeight: 'bold', 
    textShadowOffset: { width: 2, height: 2 }, 
    textShadowRadius: 3 
  },
});
