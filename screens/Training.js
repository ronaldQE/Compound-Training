import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import {StylesApp} from '../styles/StylesApp';


const Training = () => {

    return (

            <View style={StylesApp.containerScreen}> 
                <Text>Seciones del Usuario</Text>
            </View>
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#383838',
        flex:1,
    }
})
export default Training