import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import estiloItem from './estiloItem';

function Item({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }
    return (
        <View style={estiloItem.container}>
            <View style={estiloItem.borda}>

                <Text style={estiloItem.texto}>Localização </Text>
                        <Text style={estiloItem.texto}> Estamos sediados em São Paulo - Sumaré, Rua amorim nº 29, fique à vontade para vistar-nos </Text>

                
            </View>
            <img src="https://media.discordapp.net/attachments/682344462579531795/918143635101474896/unknown.png?width=1321&height=670" witdh="300px" height="370px"/>

            <TouchableOpacity style={estiloItem.botaoContainer} onPress={voltar}>
                    <Text style={estiloItem.botaoTexto}>Voltar</Text>
             </TouchableOpacity>
            
            <h5> Todos os direitos reservados © Andrei de Oliveira Athaide 2º DSA</h5> 

        </View>
    )
}
export default Item;