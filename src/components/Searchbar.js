import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Searchbar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <AntDesign name="search1" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.searchText}
        placeholder="Search bar"
        value={term}
        onChangeText={onTermChange} //rather than writing(newTerm) => onTermChange(newTerm) i've given direct reference to this function here
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#FFFFFF",
    marginTop: 20,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
  },
  searchText: {
    marginLeft: 15,
    flex: 1,
  },
  iconStyle: {
    color: "black",
    fontSize: 24,
    alignSelf: "center",
  },
});
