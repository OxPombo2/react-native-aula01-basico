import { StyleSheet } from 'react-native';

const estiloItem = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff8e7',
    },
    borda: {
        backgroundColor: '#fff8e7',
        width: '80%',
        height: '18%',
        borderRadius: 10,
    },
    texto: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: "center",
        padding: 10
    },
    botaoContainer: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 5,
        height: 40,
        borderWidth: 15,
        borderWidth: 15,
        borderColor: '#836953',
        backgroundColor: '#836953',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoTexto: {
        fontSize: 18,
        color: '#000000',
        fontWeight: 'bold'
    },
});

export default estiloItem;