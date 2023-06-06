import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity
} from "react-native";
import { useState } from "react";

export default function AddScreen({ navigation }) {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a note</Text>
      <TextInput
        value={text}
        style={styles.textInput}
        onChangeText={(newText) => {
          setText(newText);
        }}
      />
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "red" }]}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styles.buttonText}>Dismiss</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    padding: 5,
    marginBottom: 20
  },
  buttonRow: {
    flexDirection: "row"
  },
  button: {
    padding: 20,
    backgroundColor: "orange",
    margin: 10
  },
  buttonText: {
    fontWeight: "bold",
    color: "white"
  }
});
