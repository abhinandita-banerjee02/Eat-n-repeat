import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { Country, State, City } from "country-state-city";

const InitalScreen = ({ navigation }) => {
  const [selectedCountry, setSelectedCountry] = React.useState("");
  const [selectedState, setSelectedState] = React.useState("");
  const [selectedCity, setSelectedCity] = React.useState("");

  const [stateArray, setStateArray] = React.useState([]);
  const [cityArray, setCityArray] = React.useState([]);

  const countries = Country.getAllCountries().map(({ isoCode, name }) => ({
    key: isoCode,
    value: name,
  }));

  const onCountrySelect = () => {
    setStateArray(() =>
      State.getStatesOfCountry(selectedCountry).map(({ isoCode, name }) => ({
        key: isoCode,
        value: name,
      }))
    );
  };

  const onStateSelect = () => {
    setCityArray(() =>
      City.getCitiesOfState(selectedCountry, selectedState).map(
        ({ name, latitude, longitude }) => ({
          key: name,
          value: name,
          latitude,
          longitude,
        })
      )
    );
  };

  return (
    <View style={styles.window}>
      <Text style={styles.heading}>Hello foody!!</Text>

      <Text style={styles.text}>Select your country</Text>
      <SelectList
        setSelected={setSelectedCountry}
        data={countries}
        boxStyles={styles.boxStyle}
        inputStyles={styles.boxText}
        maxHeight={100}
        onSelect={onCountrySelect}
        dropdownStyles={{ width: 300 }}
      />

      <Text style={styles.text}>Select your state</Text>
      <SelectList
        setSelected={setSelectedState}
        data={stateArray}
        boxStyles={styles.boxStyle}
        inputStyles={styles.boxText}
        maxHeight={100}
        onSelect={onStateSelect}
        notFoundText="no country selected"
        dropdownStyles={{ width: 300 }}
      />

      <Text style={styles.text}>Select your city</Text>
      <SelectList
        setSelected={setSelectedCity}
        data={cityArray}
        boxStyles={styles.boxStyle}
        inputStyles={styles.boxText}
        maxHeight={100}
        notFoundText="no state selected"
        dropdownStyles={{ width: 300 }}
      />

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Search", {selectedCity})}
      >
        <Text style={styles.buttonText}>Select</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InitalScreen;

const styles = StyleSheet.create({
  window: {
    flex: 1,
    backgroundColor: "#444444",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: "white",
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 30,
  },
  buttonStyle: {
    backgroundColor: "#ffb44a",
    padding: 10,
    borderRadius: 5,
    width: 300,
  },
  buttonText: {
    textAlign: "center",
    color: "#444444",
  },
  text: {
    color: "white",
    width: 300,
    marginBottom: 5,
  },
  boxText: {
    color: "white",
  },
  boxStyle: {
    width: 300,
    marginBottom: 20,
  },
});
