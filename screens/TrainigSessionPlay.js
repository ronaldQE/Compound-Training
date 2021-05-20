import React from 'react'
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, Image,ScrollView } from 'react-native'

import {StylesApp} from '../styles/StylesApp';
import TrainingSession from '../components/TrainingSession'



const TrainingSessionPlay = () => {

    return (

            <View style={StylesApp.containerScreen}>
                
                <ScrollView  style={{paddingLeft:10, paddingRight:10,}}>
                <TrainingSession/>
                <TrainingSession/>
                <TrainingSession/>
                <TrainingSession/>
                <TrainingSession/>
                </ScrollView>
                
            </View>
    )

}

const styles = StyleSheet.create({
    containerComponet:{
        backgroundColor: '#C4C4C4',
        width:'100%',
        height:135,
        borderRadius:5,
        marginBottom:10,
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
export default TrainingSessionPlay