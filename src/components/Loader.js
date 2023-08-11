import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Loader = ({ errorMessage, onError }) => {
  return (
    <View style={styles.background}>
      <Ionicons name="fast-food-outline" style={styles.icon} />
      <Text style={styles.text}>
        {errorMessage ? errorMessage : "Please wait"}
      </Text>
      {errorMessage && (
        <TouchableOpacity
          title="Try again"
          style={styles.button}
          onPress={() => onError(false)}
        >
          <Text style={styles.butttontext}>Try again</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    zIndex: 10,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    marginTop: 20,
    fontWeight: 400,
  },
  icon: {
    fontSize: 50,
    color: "white",
    textAlign: "center",
  },
  button: {
    backgroundColor: "rgb(255, 82, 82)",
    borderRadius: 8,
    padding: 10,
    marginTop: 30,
    marginHorizontal: 50,
  },
  butttontext: {
    color: "white",
    textAlign: "center",
  },
});
