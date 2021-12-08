import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import estiloColecao from './estiloColecao';

function Colecao({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }
    return (
        <View style={estiloColecao.container}>
            <View style={estiloColecao.borda}>

                <Text style={estiloColecao.texto}> Cardápio </Text>
                        <Text style={estiloColecao.texto}> Nosso cardápio tenta trazer comidas italianas, todas preparadas de maneira caseira e com muito amor </Text>

                
            </View>
            <img src="https://media.discordapp.net/attachments/682344462579531795/918160563610222722/R.png?width=929&height=670" witdh="400px" height="400px"/>

            <TouchableOpacity style={estiloColecao.botaoContainer} onPress={voltar}>
                    <Text style={estiloColecao.botaoTexto}>Voltar</Text>
             </TouchableOpacity>
            
            <h5> Todos os direitos reservados © Andrei de Oliveira Athaide 2º DSA</h5> 

        </View>
    )
} 
export default Colecao;