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

export default function Main ({navigation}){
    return (<>
    <View style={styles.container}>
    <Text>hi ! This is the main page </Text>
    </View>
   
    </>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  