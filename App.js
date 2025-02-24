import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Index from './src/screens/index.js';
import Usuarios from './src/screens/usuarios.js';
import Usuarios_cadastrar from './src/screens/usuarios_cadastrar.js'
import Objetos from './src/screens/objetos.js';
import Objetos_cadastrar from './src/screens/objetos_cadastrar.js';
import Categorias from './src/screens/categorias.js';
import Categorias_cadastrar from './src/screens/categorias_cadastrar.js'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Index'>
        
        <Stack.Screen name='Index' component={Index}/>

        <Stack.Screen name='Usuários' component={Usuarios}/>
        <Stack.Screen name='Usuários_cadastrar' component={Usuarios_cadastrar}/>

        <Stack.Screen name='Objetos' component={Objetos}/>
        <Stack.Screen name='Objetos_cadastrar' component={Objetos_cadastrar}/>

        <Stack.Screen name='Categorias' component={Categorias}/>
        <Stack.Screen name='Categoria_cadastrar' component={Categorias_cadastrar}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}