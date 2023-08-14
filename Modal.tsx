import { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { StackParamList } from "./App";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

type ModalRouteProp = RouteProp<StackParamList, "Modal">;

const Modal = () => {
  const { params } = useRoute<ModalRouteProp>();
  const navigation = useNavigation();

  return (
    <View style={styles.modalContainer}>
      <TouchableOpacity
        style={styles.modalTouchable}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image source={{ uri: params.url }} style={styles.modalImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  modalTouchable: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalImage: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});

export default Modal;
