import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, Button, TouchableOpacity } from "react-native";
import { height, width } from "../../utils/constants";
import { useEffect } from "react"

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  getStarted: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    paddingTop: 10,
    paddingBottom: 10,
    width: "80%",
    backgroundColor: "#C67C4E",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  image: {
    width: width,
    height: height / 1.7,
    resizeMode: "cover",
    position: "absolute",
  },
  largeText: {
    fontSize: 40,
    color:"#FFF",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Poppins-Black"
  },
  bottomContainer:{
    width: "100%",
    position: "absolute",
    bottom: 20,
    alignItems: "center",
    justifyContent: "center",
  }
});

const Splash = ({navigation}) => {
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      navigation.navigate("main");
    },3000)

    return clearTimeout(timeout);
  },[])
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../../assets/images/background.png")} />
      <View style={styles.bottomContainer}>
        <Text style={styles.largeText}>Coffee so good, your taste buds will love it.</Text>
        <TouchableOpacity style={styles.getStarted}>
            <Text style={{fontSize: 20, color:"#FFF", fontFamily:"Poppins-Black"}}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Splash;
