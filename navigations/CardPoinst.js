import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const CardPoinst = () => {
    return (
        <View style={styles.containerComponet}>
            <View>
                <Text style={styles.title}>Desafio</Text>
            </View>
            <View style={styles.conteFondPts}>
                <Image
                    source={require("../assets/iconComponet/fondPoints.png")}
                    style={{ with: 80, height: 80 }}
                />
                <Text style={ styles.points}>+500</Text>
            </View>

        </View>
    )
}

export default CardPoinst

const styles = StyleSheet.create({
    containerComponet: {
        backgroundColor: '#535353',
        width: '100%',
        height: 140,
        borderRadius: 5,
        marginTop: 10,
        padding: 5,
        alignItems: "center",
        paddingTop: 10,
        //alignContent:"center"

    },
    title: {
        textAlign: "center",
        fontSize: 20,
        color: "#F1F1F1",
        marginBottom:5,
    },
    conteFondPts: {
        width: 80,
        height: 80,
        zIndex: 0,
    },
    points: {
        textAlign:'center',
        fontSize: 20,
        color: '#FFA500',
        zIndex: 5,
        marginTop: -54,
    }
})
