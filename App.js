import { View, StyleSheet, Text } from "react-native";
import Greet from "./components/Greet";

export default function App() {
  return (
    <View style={styles.container}>
      <Greet name="giorgi" />
      <Greet name="nika" />
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>
          Style Inheritance <Text style={styles.boldText}>in Bold</Text>
        </Text>
      </View>
      {/* Inheritance from View component in react native isnt working but working in case of Text component */}
      <View style={[styles.box, styles.lightblueBg, styles.boxShadow]}>
        <Text style={{ borderRadius: 5, backgroundColor: "red" }}>
          {/* borderradius styleing in Text component only assigned to android version not ios,
           if for ios want borderadius must be wrapped in View comp  */}
          Lightblue Box
        </Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg, styles.androidShadow]}>
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
  darkMode: {
    backgroundColor: "black",
  },
  darkModeText: {
    color: "white",
  },
  boldText: {
    fontWeight: "bold",
  },
  box: {
    width: 250,
    height: 250,
    // padding: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "green",
    borderStyle: "dashed",
    borderRadius: 5,
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  },
  boxShadow: {
    shadowColor: "green",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    // this boxShadow class properties work on ios version
  },
  androidShadow: {
    elevation: 10,
    // this wil work on android
  },
});
