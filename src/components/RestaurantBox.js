import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";

const RestaurantBox = ({result}) => {
  const rating = 4.4;
  const reviews = 4490;

  return (
    <View style={styles.container}>
      <Image source={{ uri: result.image_url }} style={styles.image} />
      <Text style={styles.largeText}>{result.name.length>20 ? result.name.slice(0,16)+"..." : result.name}</Text>
      <Text style={styles.smallText}>Rating {result.rating}, Reviews {result.review_count}</Text>
    </View>
  );
};

export default RestaurantBox;

const styles = StyleSheet.create({
  container:{
    marginTop: 15,
    marginRight: 20,
  },
  smallText: {
    color: "white",
    fontSize: 10
  },
  largeText: {
    color: "white",
    fontSize: 15
  },
  image: {
    height: 150,
    width: 200,
    marginBottom: 10,
    borderRadius: 5
  },
});
