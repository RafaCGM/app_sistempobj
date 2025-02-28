import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Index from './src/screens/index.js';
import Usuarios from './src/screens/usuarios.js';
import Objetos from './src/screens/objetos.js';
import Categorias from './src/screens/categorias.js';
import Categorias_cadastrar from './src/screens/categorias_cadastrar.js'
import Categorias_editar from './src/screens/categorias_editar.js'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Index'>
        
        <Stack.Screen name='Index' component={Index}/>

        <Stack.Screen name='Usuarios' component={Usuarios}/>

        <Stack.Screen name='Objetos' component={Objetos}/>

        <Stack.Screen name='Categorias' component={Categorias}/>
        <Stack.Screen name='Categoria_cadastrar' component={Categorias_cadastrar}/>
        <Stack.Screen name="Categoria_editar" component={Categorias_editar}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}