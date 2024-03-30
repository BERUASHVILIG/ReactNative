import { View, StyleSheet, Text, ScrollView } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#342132", flex: 1 }}>Box 1</Box>
      <Box style={{ backgroundColor: "#265655", flex: 3 }}>Box 2</Box>
      <Box style={{ backgroundColor: "#257755", flex: 2 }}>Box 3</Box>
      {/* <Box style={{ backgroundColor: "#755126" }}>Box 4</Box>
      <Box style={{ backgroundColor: "#338598" }}>Box 5</Box>
      <Box style={{ backgroundColor: "#789922" }}>Box 6</Box> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});
