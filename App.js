import { View, ActivityIndicator, Button, Alert } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "yellow", padding: 60 }}>
      <ActivityIndicator
        size="large"
        color="midnightblue"
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        // animating={false} // animating prop for controll visibilty using state
      />
      <Button title="Alert" onPress={() => Alert.alert("Invalid data")} />
      <Button
        title="Alert2"
        onPress={() => Alert.alert("Invalid data", "DOB incorrect")}
      />
      <Button
        title="Alert3"
        onPress={() =>
          Alert.alert("Invalid data", "DOB incorrect", [
            { text: "Cencel", onPress: () => console.log("cencel pressed") },
            { text: "OK", onPress: () => console.log("OK pressed") },
          ])
        }
      />
    </View>
  );
}
