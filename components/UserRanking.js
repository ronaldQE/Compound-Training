import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";

const UserRanking = (props) => {
  return (
    <View style={styles.containerComponet}>
      <View style={styles.contenAvatar}>
        <Avatar
          rounded
          size="medium"
          source={require("../assets/iconComponet/userRankig.png")}
        />
      </View>
      <View style={styles.contenInfo}>
        <Text style={styles.position}>{props.position}</Text>
        <Text style={styles.name}>{props.nameUser}</Text>
        <Text style={styles.points}>pts: {props.points}</Text>
      </View>
    </View>
  );
};

export default UserRanking;

const styles = StyleSheet.create({
  containerComponet: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "#242424",
    width: "100%",
    height: 150,
    borderRadius: 5,
    marginTop: 5,
    padding: 5,
    alignItems: 'center',
    alignContent:'center',
    textAlignVertical:'center',
    paddingTop: 10,
    paddingBottom: 10,
    //alignContent:"center"
  },
  contenAvatar: {
    flex: 2,
    //width:'20%',
  },
  contenInfo: {
    //width:'80%',
    flex: 10,
    flexDirection: 'row',
  },
  position: {
    fontSize: 20,
    color: "#02D8BE",
    width: "15%",
  },
  name: {
    fontSize: 16,
    color: "#F1F1F1",
    width: "55%",
  },
  points: {
    fontSize: 16,
    color: "#02D8BE",
    width: "30%",
  },
});
