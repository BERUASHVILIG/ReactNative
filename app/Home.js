import React from "react";
import {
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
  Button,
} from "react-native";

const Home = ({ navigation }) => {
  const { styles } = useStyle();

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={{ fontSize: useWindowDimensions().width > 500 ? 50 : 24 }}>
          Welcome!Home
        </Text>
        <Button
          title="show About"
          onPress={() => navigation.navigate("About")}
        />
      </View>
    </View>
  );
};

const useStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "plum",
      justifyContent: "center",
      alignItems: "center",
    },
    box: {
      width: useWindowDimensions().width > 500 ? "70%" : "90%",
      height: useWindowDimensions().height > 500 ? "60%" : "90%",
      backgroundColor: "lightblue",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return { styles };
};

export default Home;
