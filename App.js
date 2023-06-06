import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import * as SQLite from "expo-sqlite";
import NotesScreen from "./components/NotesScreen";

const db = SQLite.openDatabase("notes.db");

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
