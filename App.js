import { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

export default function App() {
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get("window"),
  });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ window: Dimensions.get("window") });
    };

    Dimensions.addEventListener("change", updateDimensions);

    return () => {
      Dimensions.removeEventListener("change", updateDimensions);
    };
  }, []);

  const { window } = dimensions;
  const windowWidth = window.width;
  const windowHeight = window.height;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: windowWidth > 500 ? "70%" : "90%",
            height: windowHeight > 500 ? "60%" : "90%",
          },
        ]}
      >
        <Text style={{ fontSize: windowWidth > 500 ? 50 : 24 }}>Welcome!</Text>
      </View>
    </View>
  );
}

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

// console.log({ windowHeight, windowWidth });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    // width: windowWidth > 500 ? "70%" : "90%",
    // height: windowHeight > 500 ? "60%" : "90%",
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  // text: {
  //   fontSize: windowWidth > 500 ? 50 : 24,
  // },
});
