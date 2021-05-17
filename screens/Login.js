import  React from 'react'
import { View, TextInput, ScrollView, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import MainStyles from '../utils/Styles'

const Login = () => {

    const [user, setUser] = React.useState({
        email: '',
        password: ''
    })

    const handleInputChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.viewLogo}>
                <Image
                    style={styles.logo}
                    source={require('../assets/img-login.png')}
                />
            </View>
            <Text style={styles.title}>Iniciar Sesión</Text>
            
            <View style={styles.group}>
                <TextInput 
                placeholderTextColor='#ffffff' 
                placeholder='Ingrese su correo' 
                style={styles.input}
                />

                <TextInput 
                placeholderTextColor='#ffffff' 
                placeholder='Ingrese su contraseña' 
                secureTextEntry={true} 
                style={styles.input} 
                />
            </View>

            <TouchableOpacity>
                <View style={ MainStyles.button}>
                    <Text style={ MainStyles.buttonLabel}>Ingresar</Text>
                </View>
            </TouchableOpacity>

            <View style={{marginTop:20}}>
                <Text style={styles.account}>Aún no tienes una cuenta</Text>
                <Text style={styles.account}>Registrate aquí</Text>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 35,
        backgroundColor: '#383838',
        textAlign: 'center'
    },
    group:{
        textAlign: 'center',
        marginTop: 50
    },
    viewLogo:{
        alignItems: 'center'
    },
    input:{
        flex: 1,
        marginBottom: 150,
        marginTop:10,
        color: '#ffffff',
        borderBottomColor: '#FFFFFF',
        textShadowColor: '#FFFFFF',
        padding: 3,
        borderBottomWidth: 1,
        marginBottom: 15,
        fontSize: 16
    },
    title:{
        marginTop: 20,
        fontSize: 30,
        color: '#ffffff',
        textAlign: 'center'
    },
    logo: {
        marginTop: 50,
        marginBottom: 50,
        width: 192,
        height: 175,
        alignItems: 'center'
    },
    account:{
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 12
    }
})

export default Login;