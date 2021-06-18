import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import SectionBody from "../components/SectionBody";

import { StylesApp } from "../styles/StylesApp";
import imgSessionBody from "../assets/iconComponet/imgSessionBody"

const BodySection = () => {
    return (
        <View style={StylesApp.containerScreen}>
            <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
                <View style={{ alignItems: "center", padding: 5 }}>
                    <View style={styles.contentTwo}>
                        <View style={styles.contentBotton}>
                            <SectionBody title="Abdomen" img={imgSessionBody.imgAbdomen}/>
                        </View>
                        <View style={styles.contentBotton}>
                            <SectionBody title="Pecho" img={imgSessionBody.imgPecho}/>
                        </View>
                    </View>
                    <View style={styles.contentTwo}>
                        <View style={styles.contentBotton}>
                            <SectionBody title="Espalda" img={imgSessionBody.imgEspalda}/>
                        </View>
                        <View style={styles.contentBotton}>
                            <SectionBody title="Piernas" img={imgSessionBody.imgPiernas}/>
                        </View>
                    </View>
                    <View style={styles.contentTwo}>
                        <View style={styles.contentBotton}>
                            <SectionBody title="Brazos" img={imgSessionBody.imgBrazos}/>
                        </View>
                        <View style={styles.contentBotton}>
                            <SectionBody title="Gluteos" img={imgSessionBody.imgGlutios}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default BodySection;

const styles = StyleSheet.create({
    contentTwo: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    contentBotton: {
        flex: 2,
        padding: 5,
    },
});
