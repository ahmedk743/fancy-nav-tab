import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";

const ChatScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Chat Screen</Text>
      <Button title="Daba Edher." onPress={() => alert("Mar Diya Bc!")} />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});
