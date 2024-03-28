import { Text, View, ScrollView, Image, ImageBackground } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "yellow", padding: 60 }}>
      <ScrollView>
        <View
          style={{ backgroundColor: "lightblue", width: 100, height: 100 }}
        ></View>
        <View
          style={{ backgroundColor: "lightgreen", width: 100, height: 100 }}
        ></View>
        <Image source={logoImg} style={{ width: 100, height: 100 }} />
        <Image
          source={{ uri: "https://picsum.photos/100" }}
          style={{ width: 100, height: 100 }}
        />
        <ImageBackground source={logoImg} style={{ width: 100, height: 100 }}>
          <Text>Text on background</Text>
        </ImageBackground>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </ScrollView>
    </View>
  );
}
