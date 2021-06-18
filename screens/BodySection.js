import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import SectionBody from "../components/SectionBody";

import { StylesApp } from "../styles/StylesApp";

const BodySection = () => {
    return (
        <View style={StylesApp.containerScreen}>
            <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
                <View style={{ alignItems: "center", padding: 5 }}>
                    <View style={styles.contentTwo}>
                        <View style={styles.contentBotton}>
                            <SectionBody title="Abdomen"/>
                        </View>
                        <View style={styles.contentBotton}>
                            <SectionBody title="Pecho"/>
                        </View>
                    </View>
                    <View style={styles.contentTwo}>
                        <View style={styles.contentBotton}>
                            <SectionBody title="Espalda"/>
                        </View>
                        <View style={styles.contentBotton}>
                            <SectionBody title="Piernas"/>
                        </View>
                    </View>
                    <View style={styles.contentTwo}>
                        <View style={styles.contentBotton}>
                            <SectionBody title="Brazos"/>
                        </View>
                        <View style={styles.contentBotton}>
                            <SectionBody title="Cintura"/>
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
