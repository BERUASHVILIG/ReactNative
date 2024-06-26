import { View, Text, StyleSheet } from "react-native";

const Box = ({ children, style }) => {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>alos{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "red",
    padding: 20,
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Box;
