import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Index from './src/screens/index.js';
import Usuarios from './src/screens/usuarios.js';
import Objetos from './src/screens/objetos.js';
import Categorias from './src/screens/categorias.js';
import Emprestimos from './src/screens/emprestimos.js';
import Reservas from './src/screens/reservas.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Index'>
        
        <Stack.Screen name='Index' component={Index}/>
        <Stack.Screen name='Usuários' component={Usuarios}/>
        <Stack.Screen name='Objetos' component={Objetos}/>
        <Stack.Screen name='Categorias' component={Categorias}/>
        <Stack.Screen name='Empréstimos' component={Emprestimos}/>
        <Stack.Screen name='Reservas' component={Reservas}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}