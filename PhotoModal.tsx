import React from "react";
import { View, Image, TouchableOpacity, Modal, StyleSheet } from "react-native";

interface PhotoModalProps {
  url: string;
  onClose: () => void;
}

const PhotoModal: React.FC<PhotoModalProps> = ({ url, onClose }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        {/* Добавьте иконку закрытия модального окна, если хотите */}
      </TouchableOpacity>
      <Image source={{ uri: url }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "90%",
    height: "90%",
    resizeMode: "contain",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    // Добавьте стили для иконки закрытия модального окна, если хотите
  },
});

export default PhotoModal;
