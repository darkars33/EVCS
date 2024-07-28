import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Colors from "../../Utils/Colors";
import { TouchableOpacity } from "react-native";

const LoginScreen = () => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <Image
        source={require("./../../../assets/images/logo.png")}
        style={styles.logoImage}
      />
      <Image
        source={require("./../../../assets/images/ev-charging.png")}
        style={styles.bgImage}
      />
      <View style={{ padding: 20 }}>
        <Text style={styles.heading}>
          Your Ultimate EV charging Station Finder App
        </Text>
        <Text style={styles.description}>
          Find EV charging Station near you, plan trip and so much many more
        </Text>
        <TouchableOpacity onPress={() => alert("button click")} >
          <Text style={styles.button}>Login With Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoImage: {
    width: 250,
    height: 80,
    left: 0,
  },
  bgImage: {
    width: "100%",
    height: 240,
    marginTop: 20,
  },
  heading: {
    fontSize: 20,
    fontFamily: "Outfit-SemiBold",
    textAlign: "center",
    marginTop: 20,
  },
  description: {
    fontSize: 17,
    fontFamily: "Outfit",
    marginTop: 15,
    textAlign: "center",
    color: Colors.GRAY,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 30,
    marginTop: 50,
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Outfit-SemiBold",
    color: Colors.WHITE,
  },
});

export default LoginScreen;
