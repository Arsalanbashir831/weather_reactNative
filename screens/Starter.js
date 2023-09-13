import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function Starter({ navigation }) {
  return (
    <ImageBackground
      style={{ flex: 1, resizeMode: "cover" }}
      source={require("../assets/bgImage.jpg")}
    >
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Weather App</Text>
          <Text style={styles.subtitle}>Welcome to the Weather App</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Main")}
          style={{
            backgroundColor: "white",
            width: 100,
            borderRadius: 5,
            marginTop: 100,
          }}
        >
          <Text style={{ fontWeight: "bold", padding: 10, textAlign: "center" }}>
            Start
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    paddingTop: 10,
    marginTop: 20,
    width: Dimensions.get("window").width,
    padding: 20,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    color: "white",
  },
  subtitle: {
    textAlign: "center",
    color: "white",
  },
});
