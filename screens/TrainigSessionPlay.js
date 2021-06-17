import React from 'react'
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, Image,ScrollView } from 'react-native'

import {StylesApp} from '../styles/StylesApp';
import Session from '../components/Session'



const TrainingSessionPlay = () => {

    return (

            <View style={StylesApp.containerScreen}>
                
                <ScrollView  style={{paddingLeft:10, paddingRight:10,}}>
                <Session/>
                <View style={{textAlign:'center', alignItems:"center"}}>
                <View style={styles.containerTime}>
                    <Text style={styles.timeTex}>00:00</Text>
                </View>

                </View>
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
    timeTex:{
        alignItems:"center",
        alignContent:'center',
        fontSize:60,
        color: '#F1F1F1',
        paddingTop:50,
        //backgroundColor:'#445554',
    },
    containerTime:{
        marginTop:50,
        color: '#F1F1F1',
        borderRadius:'50%',
        borderWidth:8,
        borderColor: '#F1F1F1',
        alignItems:"center",
        textAlignVertical:'center',
        width:200,
        height:200,
       // backgroundColor:'#444444',


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
})
export default TrainingSessionPlay