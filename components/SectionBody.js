import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import imgPiernas from "../assets/iconComponet/abdomen.png"

const SectionBody = (props) => {
  const navigation = useNavigation();
  let imgPiernas = "../assets/iconComponet/abdomen.png";
  return (
    <View style={styles.containerComponet}>
      <TouchableOpacity
        style={styles.containerBouton}
        onPress={() => navigation.navigate("start")}
      >
        <View style={styles.contentIcon}>
          <Image
            source={props.img}
            style={{ with: 100, height: 100 }}
          />
        </View>
        <View>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SectionBody;

const styles = StyleSheet.create({
  containerComponet: {
    backgroundColor: "#242424",
    width: 180,
    height: 180,
    borderRadius: 5,
    marginTop: 5,
    padding: 10,
    alignItems: "center",
    alignContent: "center",
    textAlignVertical: "center",
    paddingTop: 25,
    paddingBottom: 10,
    //alignContent:"center"
  },
  contentIcon: {
    width: 100,
    height: 100,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    color: "#F1F1F1",
  },
});
