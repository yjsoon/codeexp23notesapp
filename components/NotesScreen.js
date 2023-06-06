import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function NotesScreen({ navigation }) {
  const [notes, setNotes] = useState([
    { title: "Walk the cat", id: "0" },
    { title: "Feed the banana", id: "1" }
  ]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={addNote}>
          <FontAwesome
            name="pencil-square-o"
            size={24}
            color="black"
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      )
    });
  });

  function addNote() {
    let newNote = {
      title: "Sample new note",
      id: notes.length.toString()
    };
    setNotes([...notes, newNote]);
  }

  function renderNote({ item }) {
    return (
      <View
        style={{
          padding: 10,
          paddingTop: 20,
          paddingBottom: 20,
          borderBottomColor: "#ccc",
          borderBottomWidth: 1
        }}>
        <Text style={{ fontSize: 16 }}>{item.title}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={notes}
        renderItem={renderNote}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff8",
    alignItems: "center",
    justifyContent: "center"
  }
});
