import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import CardPoinst from "../components/CardPoinst";
import { Avatar } from "react-native-elements";

import { StylesApp } from "../styles/StylesApp";

const Attainment = () => {
    return (
        <View style={StylesApp.containerScreen}>
            <ScrollView style={{ paddingLeft: 10, paddingRight: 10, }}>
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

                        <View style={styles.contentBarLevel}>
                            <Text style={{ color: "#FFA500", marginBottom:20}}>Nivel principiante</Text>
                        <View style={styles.barLevel}>
                            <View style={{backgroundColor:'#D80A3B', borderRadius:5, width:'40%', height:10}}>
                            </View>
                        </View>
                        </View>
                        <View style={styles.containeListPoints}>
                            <CardPoinst />
                            <CardPoinst />
                            <CardPoinst />
                            <CardPoinst />
                        </View>
                    </View>
                </View>
            </ScrollView>
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
    contentBarLevel: {
        //marginTop:20,
        alignItems: "center",
        height: 60,
        //backgroundColor: '#522225',
    },
    barLevel: {
        width: '100%',
        backgroundColor: '#C4C4C4',
        borderRadius:5,
        height:10,
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
