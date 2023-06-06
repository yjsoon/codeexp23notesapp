import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

function NotesScreen() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
