import { View, StyleSheet, Text, ScrollView } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#342132" }}>Box 1</Box>
      <Box style={{ backgroundColor: "#265655" }}>Box 2</Box>
      <Box style={{ backgroundColor: "#257755", flexBasis: 140, flex: 1 }}>
        Box 3
      </Box>
      <Box style={{ backgroundColor: "#755126", height: 140, flex: 1 }}>
        Box 4
      </Box>
      {/* in this case flexBasis property will increase use of flex property but the box with height property
       is ignored and take place that is left over   */}
      <Box style={{ backgroundColor: "#338598" }}>Box 5</Box>
      <Box style={{ backgroundColor: "#789922" }}>Box 6</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
  },
});
