import React, {useState} from 'react';
import { View, Text, ScrollView, StyleSheet, Button} from 'react-native';
import { RadioButton} from 'react-native-paper';

const UserLevel = (props) =>{
       props.route.email;
        props.route.params.password;
        props.route.params.height;
       props.route.params.weight;
        props.route.params.sex;


    const [state, setState] = useState({
        level: '',
    });
    
    const handleText = (name, value) => {
        setState({ ...state, [name]: value });
    }
    return (
        <ScrollView style={styles.container}>
            <View >
                <Text style={styles.title}>Nivel Fitness </Text>
            </View>
            <View>
                <View>
                <RadioButton.Group style={styles.radioButtons} onValueChange={(value) => handleText('level',value)}>
                 <View style={styles.viewLvl}> 
                     <RadioButton.Item style={styles.titleLvl} 
                     label="Novato"  
                     value="Novato"
                     />
                     <Text style={styles.desc}>Sin práctica de ejercicio</Text>
                </View>
                 <View style={styles.viewLvl}>
                    <RadioButton.Item 
                    label="Principiante"
                    value="Principiante"/>
                    <Text style={styles.desc}>Practica algo de ejercicio</Text>
                 </View>
                 <View style={styles.viewLvl}>
                    <RadioButton.Item 
                    label="Intermedio"
                    value="Intermedio"
                    />
                    <Text style={styles.desc}>Practica ejercicio moderado y consistentemente</Text>
                 </View>
                 <View style={styles.viewLvl}>
                    <RadioButton.Item 
                    label="Avanzado"
                    value="Avanzado"/>
                    <Text style={styles.desc}>Practica ejercicio moderado hace bastante tiempo, con buena técnica
                          y consistente
                    </Text>
                 </View>
                 <View style={styles.viewButton}>
                 <Button title="Siguiente" onPress={()=> props.navigation.navigate('UserDiscipline', {
                        name: props.route.params.name,
                        email: props.route.params.email,
                        password: props.route.params.password,
                        height: props.route.params.height,
                        weight: props.route.params.weight,
                        sex: props.route.params.sex,
                        level: state.level
                    })}>
                     hola
                 </Button>
                 </View>
                 
            </RadioButton.Group>
                </View>
            </View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 50,
        backgroundColor: '#0E1110'
    },
    title: {
        fontSize:20,
        textAlign: 'center',
        marginBottom: '5%',
        color: 'white'
    },
    viewLvl: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: '5%'
    },
    viewButton:{
        textAlign: 'center',
        marginLeft: '20%',
        marginRight: '20%',
        width: '60%',
    }, 
    desc:{
        justifyContent:'center',
        alignItems: 'flex-start',
        marginLeft: '5%',
        marginBottom: '1%'
    }
    

})
export default UserLevel;