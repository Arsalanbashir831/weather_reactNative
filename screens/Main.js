import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function Main({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Search The Location</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Search"
            style={styles.inputStyle}
            placeholderTextColor="#777" // Customize the placeholder text color
          />
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop:100
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding:10
  },
  inputStyle: {
    flex: 1,
    height: 40,
    borderColor: "#555",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: "#333",
  },
  searchButton: {
    backgroundColor: "orange",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginLeft: 10,
  },
  searchButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
