import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View
      style={{
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontFamily: "Poppins-Black" }}>Home Page.</Text>
    </View>
  );
};

export default HomeScreen;
