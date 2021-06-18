import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native"


const Session = (props) => {
    const navigation = useNavigation();
    const iconPlay = "../assets/iconComponet/play.png";

    return (
        <View style={styles.containerComponet}>
            <View style={styles.containerGif}>
                <Text style={{ fontSize: 30, padding: 10, color: "#F1F1F1" }}>GIF</Text>
            </View>
            <View>
                    <Text style={{ fontSize: 14, padding: 5, color: "#F1F1F1" }}>
                        {props.description}
                    </Text>
            </View>

            <View style={styles.containerCount}>
                    <TouchableOpacity
                        style={styles.containerBouton}
                        onPress={() => navigation.navigate('sessionPlay')}
                    >
                        <Image 
                        source={require("../assets/iconComponet/play.png")}
                        style={{ with: 20, height: 24,}}
                        >

                        </Image>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

export default Session

const styles = StyleSheet.create({
    containerComponet: {
        backgroundColor: '#242424',
        width: '100%',
        height: 200,
        borderRadius: 5,
        marginTop: 10,
        padding: 5,
        alignItems:"center",
        paddingTop:10,
        //alignContent:"center"

    },
    containerGif: {
        alignItems: "center",
        backgroundColor: "#7C6666",
        height:100,
        width:150,
        alignContent:"center",


    },
    containerBouton: {
        height:24,
        width:20,

    },
    containerCount: {
        alignItems: "flex-end",
        marginRight: 0,
        paddingRight: 10,
        alignSelf:"flex-end",
        alignItems:"center"
        
    }
})
