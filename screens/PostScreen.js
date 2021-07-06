import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";

const PostScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Post Screen</Text>
      <Button title="Daba Edher." onPress={() => alert("Mar Diya Bc!")} />
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});
