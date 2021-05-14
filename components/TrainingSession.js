import React from 'react'
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'

const TrainingSession = () => {
    return (
        <View style={styles.containerComponet}>
            
            <View style={styles.container}>
            <View style={styles.containerTitle}>
            <Text style={{fontSize:30, padding: 10}}>CALENTAMIENTO</Text>
            </View>
            <View style={styles.containerBouton}>
            <TouchableOpacity>Start</TouchableOpacity>
            </View>
            </View>
            
            <View style={styles.containerCount}>
            <Text style={{fontSize:24}}>2/4</Text>
            </View>

        </View>
    )
}

export default TrainingSession

const styles = StyleSheet.create({
    containerComponet:{
        backgroundColor: '#C4C4C4',
        width:'100%',
        height:135,
        borderRadius:5,
        marginBottom:20,
        padding:5,
        
    },
    container:{
        alignItems:"center",
        
    },
    containerTitle:{
        fontSize:100,
        flex:3,
        alignContent:"center"
    },
    containerBouton:{
        
        backgroundColor:"none",
        borderColor:"#FFA500",
        borderStyle:"solid",
        borderWidth:2,
        color:"#FFFFFF",
        padding: 5,
        paddingLeft:30, paddingRight:30,
        flex:1,
        alignContent:"center",
        borderRadius:20,


    },
    containerCount:{
        fontSize:20,
        borderRadius:10,
        //flex:1,
        alignItems:"flex-end",
        marginRight:0,
        paddingRight:10,


    }
})
