import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BarNavigation from '../components/BarNavigation'
//import { ButtonGroup } from 'react-native-elements'

const HomeUser = () => {



    return (


        <View style={styles.container}>
            <View style={styles.containerBody}>
                <Text>Seciones del Usuario</Text>
            </View>

            <View styles={styles.containerBar}>
                <BarNavigation></BarNavigation>
            </View>
        </View>


    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    containerBody: {
        flex: 4,
        backgroundColor: '#455A64',
        justifyContent: 'center',
        alignItems:'center',
    },
    containerBar: {
        flex: 1
    }

});

export default HomeUser