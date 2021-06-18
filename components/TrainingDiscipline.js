import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const TrainingDiscipline = (props) => {
  return (
    <View style={styles.container}>
    <View style={styles.contentTitle}>
    </View>
    <View style={styles.discipline}>
    <Text style={{ color: "#FFFFFF", marginTop: -44, zIndex:10, fontSize:24 }}>{props.discipline}</Text>

    </View>
      <Image
        source={require("../assets/imgDisipline/FondoWoman.png")}
        style={{ with: 300, height: 200, zIndex: -4,marginTop: -110 }}
      />
      <Text style={{ color: "#FFA500", marginTop: -30, zIndex: 5, marginLeft:10}}>
        Nivel {props.nevelUser}
      </Text>
    </View>
  );
};

export default TrainingDiscipline;

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: "#242424",
    marginBottom: 10,
  },
  contentTitle:{
      marginTop:60,
      opacity:0.4,
      backgroundColor:"#8C7C7C",
      height:50,
      zIndex: -1,
  },
  discipline:{
      alignItems: 'center',
  }
});
