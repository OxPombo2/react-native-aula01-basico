import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloPerfil from './estiloPerfil';

function Perfil ({ navigation }) {
    const voltar = () => {
        navigation.goBack();
    }


return (
    <View style={estiloPerfil.container}>
        <View style={estiloPerfil.borda}>
            <Text style={estiloPerfil.texto}> Quem somos? </Text>
           
            <center>
            <Text style={estiloPerfil.texto}> O restaurante Dona Madalena é um projeto que tem como objetivo mostrar esta área, um cardápio e a sua respectiva localização.
    Nome: Andrei de Oliveira Athaide 2º DSA.   </Text>
            </center>
                
            </View>


            <img src="https://www.sillasmesas.es/blog/wp-content/uploads/2019/09/inspiracion-para-decorar-la-fachada-de-un-restaurante-1-1024x628.jpg" width="600px" height="400px"/>


<h5> Todos os direitos reservados © Andrei de Oliveira Athaide 2º DSA</h5> 
    </View>
    
)
}
export default Perfil;
