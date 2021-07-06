import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";

const FindScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Find Screen</Text>
      <Button title="Daba Edher." onPress={() => alert("Mar Diya Bc!")} />
    </View>
  );
};

export default FindScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});
