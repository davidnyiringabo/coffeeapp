import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { height, width } from '../../utils/constants';

const styles = StyleSheet.create({
    container:{
        width: width,
        height: height,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    getStarted: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        width: "80%",
        height: 80,
        backgroundColor:"#C67C4E"
    },
    image:{
        width: 200,
        height: 200,
        resizeMode: 'contain'
    }
})
const SplashScreen = () => {
  return (
    <View styles={styles.container}>
      <Text></Text>
    </View>
  );
}

export default SplashScreen;
