import { StyleSheet } from 'react-native';

const estiloLogin = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    borda: {
        backgroundColor: '#c3b091',
        width: '80%',
        height: 230,
        borderRadius: 10,

    },

    texto: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: "center",
        padding: 10

},
    campo: {
        backgroundColor: '#FFFFFF',
        fontSize: 18,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 5, 
        borderRadius: 5,
        height: 40,
        paddingLeft: 10
    },
    botaoContainer: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 5,
        height: 40,
        borderWidth: 2,
        borderColor: '#e8f2e9',
        backgroundColor: '#836953',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoTexto: {
        fontSize: 18,
        color: '#000000',
        fontWeight: 'bold'

    },
})
export default estiloLogin;