import { useState } from "react";
import { Text, View, Button, Modal, StatusBar } from "react-native";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isStatusBarVisible, setStatusBarVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "yellow", padding: 60 }}>
      <StatusBar
        backgroundColor="blue"
        barStyle="dark-content"
        hidden={!isStatusBarVisible}
      />
      <Button
        title={isStatusBarVisible ? "hide statusbar" : "show statusbar"}
        onPress={() => setStatusBarVisible(!isStatusBarVisible)}
      />
      <Button
        title="Open Modal"
        onPress={() => setIsModalVisible(true)}
        color="midnightblue"
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="fade"
        presentationStyle="pageSheet"
        // presentationStyle only works on android
      >
        <View style={{ flex: 1, backgroundColor: "green", padding: 60 }}>
          <Text>Modal Text</Text>
          <Button
            title="Close Modal"
            color="red"
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
}
