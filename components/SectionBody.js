import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const SectionBody = () => {
  return (
    <View style={styles.containerComponet}>
      <View>
        <Image
          source={require("../assets/iconComponet/abdomen.png")}
          style={{ with: 20, height: 24 }}
        />
      </View>
      <View>
        <Text>Seccion</Text>
      </View>
    </View>
  );
};

export default SectionBody;

const styles = StyleSheet.create({
  containerComponet: {
    backgroundColor: "#242424",
    width: 400,
    height: 400,
    borderRadius: 5,
    marginTop: 5,
    padding: 5,
    alignItems: "center",
    alignContent: "center",
    textAlignVertical: "center",
    paddingTop: 10,
    paddingBottom: 10,
    //alignContent:"center"
  },
  contentIcon: {
    width: 300,
    height: 300,
  },
  conteTitle: {
    textAlign: "center",
    fontSize: 20,
  },
});
