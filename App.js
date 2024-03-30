import { View, StyleSheet, Text } from "react-native";
import Greet from "./components/Greet";

export default function App() {
  return (
    <View style={styles.container}>
      <Greet name="giorgi" />
      <Greet name="nika" />
      <View style={[styles.box, styles.lightblueBg]}>
        <Text style={{ borderRadius: 5, backgroundColor: "red" }}>
          {/* borderradius styleing in Text component only assigned to android version not ios,
           if for ios want borderadius must be wrapped in View comp  */}
          Lightblue Box
        </Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg]}>
        <Text>Lightgreen Box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    padding: 60,
  },
  box: {
    width: 100,
    height: 100,
    // padding: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "green",
    borderStyle: "dashed",
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  },
});
