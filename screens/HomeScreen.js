import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

//import { ButtonGroup } from 'react-native-elements'

const HomeScreen = () => {



    return (

            <View style={styles.container}> 
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
export default HomeScreen