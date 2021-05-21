import React, {useState} from 'react'
import { View, Text, ScrollView, StyleSheet, Button} from 'react-native';
import { RadioButton} from 'react-native-paper';
const UserDiscipline = (props) =>{
    console.log(props.route.params.level)
    
    const [state, setState] = useState({
        discipline:'',
        level: '',
       
    });
    const handleText = (name, value) => {
        setState({ ...state, [name]: value });
    }
    return (
        <ScrollView style={styles.container}>
            <View >
                <Text style={styles.title}>Elegir Disciplina De Entrenamiento </Text>
            </View>
            <View>
                <View>
                <RadioButton.Group style={styles.radioButtons} onValueChange={(value) => handleText('discipline',value)} >
                 <View style={styles.viewLvl}> 
                     <RadioButton.Item 
                     style={styles.titleLvl} 
                     label="Calistenia"
                     value="Calistenia"/>
                     <Text style={styles.desc}>Sistema de ejercicios físicos con el propio peso corporal</Text>
                </View>
                 <View style={styles.viewLvl}>
                    <RadioButton.Item 
                    label="Crossfit"
                    value="Crossfit"
                    />
                    <Text style={styles.desc}>
                        Sistema de entrenamiento de fuerza, acondicionamiento basado en ejercicios 
                        funcionales constantemente variados realizados a una alta intensidad
                    </Text>
                 </View>
                 <View style={styles.viewLvl}>
                    <RadioButton.Item 
                    label="HIT"
                    value="HIT"
                    />
                    <Text style={styles.desc}>
                        Entrenamiento interválico de alta intensidad 
                        durante corto espacio de tiempo
                    </Text>
                 </View>
                 <View style={styles.viewButton}>
                 <Button title="Siguiente" onPress={()=>props.navigation.navigate('UserGoals', {
                        name: props.route.params.name,
                        email: props.route.params.email,
                        password: props.route.params.password,
                        height: props.route.params.height,
                        weight: props.route.params.weight,
                        sex: props.route.params.sex,
                        level: props.route.params.level,
                        discipline: state.discipline
                    })}>
                     
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
export default UserDiscipline