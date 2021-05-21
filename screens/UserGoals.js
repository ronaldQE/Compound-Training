import React, {useState} from 'react';
import { View, Text, ScrollView, StyleSheet, Button} from 'react-native';
import { RadioButton} from 'react-native-paper';
import firebase from '../database/firebase';
const UserGoals =(props)=>{
    const [state, setState] = useState({
        goal:""
    });
    const handleText = (name, value) => {
        setState({ ...state, [name]: value });
    }
    const registerUser= async ()=>{
        console.log(state.goal);
        if(state.goal===""){
            alert('Debe elegir un objetivo');
        }else{
            await firebase.db.collection('users').add({
                 goal: state.goal,
                 name: props.route.params.name,
                 email: props.route.params.email,
                 password: props.route.params.password,
                 height: props.route.params.height,
                 weight: props.route.params.weight,
                 sex: props.route.params.sex,
                 level: props.route.params.level,
                 discipline: props.route.params.discipline    
            })
            alert('works')
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View >
                <Text style={styles.title}>Objetivos </Text>
            </View>
            <View>
                <View>
                <RadioButton.Group style={styles.radioButtons} onValueChange={(value) => handleText('goal',value)}>
                 <View style={styles.viewLvl}> 
                     <RadioButton.Item 
                     style={styles.titleLvl} 
                     label="Ganar Masa muscular"
                     value="Ganar Masa muscular"
                     />
                     
                </View>
                 <View style={styles.viewLvl}>
                    <RadioButton.Item 
                    label="Ganar Fuerza"
                    value="Ganar Fuerza"
                    />
                   
                 </View>
                 <View style={styles.viewLvl}>
                    <RadioButton.Item 
                    label="Perder Grasa"
                    value="Perder Grasa"
                    />
    
                 </View>
                 <View style={styles.viewButton}>
                 <Button title="Siguiente" onPress={()=>registerUser()}>
                     
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
        fontSize:30,
        textAlign: 'center',
        marginBottom: '8%',
        color: 'white'
    },
    viewLvl: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: '5%'
    },
    viewButton:{
        marginTop: '5%',
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
export default UserGoals