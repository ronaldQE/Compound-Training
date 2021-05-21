import React, { useState } from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet, Text } from 'react-native'
import { RadioButton } from 'react-native-paper';
import createStyles from '../Components/CreateUserStyle/createStyle';
import StyledButton from "../Components/StyledButton";
import firebase from '../database/firebase';
const CreateUser = (props) => {
    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        height: '',
        weight: '',
        sex: ''
    });
    const handleText = (name, value) => {
        setState({ ...state, [name]: value });
    }
    const createUser = ()=>{
        if(state.name ===''){
            alert('proveer nombre');
        }else{
            
            
        }
    }
    return (

        <ScrollView style={styles.container}>
            <Text style={createStyles.labelTitle}>Registrarse</Text>
            <View style={styles.inputGroup}>
                <TextInput style={styles.input}
                    placeholder="Ingrese Nombre Completo" placeholderTextColor="#FFFFFF"
                    onChangeText={(value) => handleText('name', value)} />
            </View>
            <View style={styles.inputGroup}>
                <TextInput style={styles.input}
                    placeholder="Ingrese Email" placeholderTextColor="#FFFFFF"
                    onChangeText={(value) => handleText('email', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput style={styles.input}
                    placeholder="Ingrese Contraseña" placeholderTextColor="#FFFFFF"
                    onChangeText={(value) => handleText('password', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput style={createStyles.input} placeholderTextColor="#FFFFFF"
                    placeholder="Ingrese Estatura en cm"
                    onChangeText={(value) => handleText('height', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput style={styles.input}
                    placeholder="Ingrese Peso en Kg" placeholderTextColor="#FFFFFF"
                    onChangeText={(value) => handleText('weight', value)}
                />
            </View>
            <Text style={styles.labelTitle2}>Seleccione Sexo</Text>
            {/* <RadioButton.Group
                onValueChange={value => handleText('sex', value)}
                value={state}
            >
                <View>
                    <Text>First</Text>
                    <RadioButton value="Masculino" />
                </View>
                <View>
                    <Text>Second</Text>
                    <RadioButton value="Femenino" />
                </View>
            </RadioButton.Group> */}



             <RadioButton.Group style={styles.radioButtons} onValueChange={value => handleText('sex',value)} value={state}>
                 <RadioButton.Item value="Masculino" label="Masculino"/>  
                 <RadioButton.Item  value="Femenino" label="Femenino"/>
            </RadioButton.Group> 

            <View >
                <StyledButton
                    type="secondary"
                    content={"Registrar"}
                    onPress={() => props.navigation.navigate('UserLevel', {
                        name: state.name,
                        email: state.email,
                        password: state.password,
                        height: state.height,
                        weight: state.weight,
                        sex: state.sex
                    })
                    }

                />
                <StyledButton
                    type="primary"
                    content={"Cancelar"}
                    onPress={() => {
                        console.warn('Botón Cancelar presionado')
                    }
                    }
                />
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
        backgroundColor: '#383838'
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 2,
        borderBottomColor: '#FFFFFF',
        color: 'white'
    },
    radioButtons: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF'
    },
    labelTitle: {
        textAlign: 'center',
        color: '#FFFFFF',
        marginBottom: '5%'
    },
    labelTitle2: {
        color: '#FFFFFF'
    },
    input:{
        textShadowColor: '#ffffff',
        color: '#ffffff'
    }

})
export default CreateUser;