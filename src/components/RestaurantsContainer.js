import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import React from "react";
import RestaurantBox from "./RestaurantBox";

const RestaurantsContainer = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.scrollBox}>
          {results.map((result) => (
            <RestaurantBox result={result} key={Math.floor(Math.random() * 100000)} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantsContainer;

const styles = StyleSheet.create({
  heading: {
    color: "white",
    fontSize: 20,
    fontWeight: 500,
  },
  container: {
    marginLeft: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.7)",
  },
  scrollBox: {
    flexDirection: "row",
  },
});
