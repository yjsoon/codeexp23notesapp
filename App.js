import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import * as SQLite from "expo-sqlite";
import { FlatList } from "react-native-gesture-handler";

const db = SQLite.openDatabase("notes.db");

function NotesScreen({ navigation }) {
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

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f93",
            height: 130, // Adjust the height as per your requirement
            elevation: 4, // Adds a shadow for Android devices
            borderBottomWidth: 1, // Adds a border under the header
            borderBottomColor: "gray" // Border color
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 30
          }
        }}>
        <Stack.Screen name="Notes" component={NotesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
