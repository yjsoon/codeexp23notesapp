import { Text, View, StyleSheet, Button } from "react-native";

export default function AddScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the add screen</Text>
      <Button
        onPress={() => {
          navigation.goBack();
        }}
        title="Dismiss"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe",
    alignItems: "center",
    justifyContent: "center"
  }
});
