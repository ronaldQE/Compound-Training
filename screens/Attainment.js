import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import CardPoinst from "../navigations/CardPoinst";
import { Avatar } from "react-native-elements";

import { StylesApp } from "../styles/StylesApp";

const Attainment = () => {
    return (
        <View style={StylesApp.containerScreen}>
            <View style={styles.container}>

                <View style={styles.containerHeard}>
                    <View style={styles.contenAvatar}>
                        <Avatar
                            rounded
                            size="medium"
                            source={require("../assets/iconComponet/userRankig.png")}
                        />
                    </View>
                    <View style={styles.contenInfo}>
                        <Text style={styles.name}>Randy Orton</Text>
                        <Text style={styles.points}>pts: 1520</Text>
                    </View>
                </View>
                <View style={styles.containerBody}>

                    <View style={styles.contentBarNevel}>
                        <Text style={{ color: "#FFA500" }}>Nivel principiante</Text>
                    </View>
                    <View style={styles.containeListPoints}>
                        <ScrollView style={{ paddingLeft: 10, paddingRight: 10, }}>
                            <CardPoinst />
                            <CardPoinst />
                            <CardPoinst />
                            <CardPoinst />
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Attainment;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#242424',
        //margin,

    },
    containerHeard: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        height: 100,
        alignItems: 'center',
        alignContent: 'center',
        textAlignVertical: 'center',
        //backgroundColor: '#555655',
    },
    containeListPoints: {
        //backgroundColor: '#000000'
    },
    containerBody: {
        marginLeft: 20,
        marginRight: 20,
    },
    contentBarNevel: {
        alignItems: "center",
        height: 60,
        //backgroundColor: '#522225',
    },
    contenAvatar: {
        flex: 2,
        //width:'20%',
    },
    contenInfo: {
        //width:'80%',
        flex: 10,
        flexDirection: "row",
    },
    name: {
        fontSize: 16,
        color: "#F1F1F1",
        width: "70%",
    },
    points: {
        fontSize: 16,
        color: "#FFA500",
        width: "30%",
    },
});
