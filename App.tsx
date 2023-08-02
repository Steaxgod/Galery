import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import PhotoGrid from "./PhotoGrid";
import PhotoModal from "./PhotoModal";

interface ImageData {
  id: number;
  url: string;
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState("");
  const [imageData, setImageData] = useState<ImageData[]>([]);

  useEffect(() => {
    // Выполните запрос к API для получения данных с фотографиями
    fetch("https://picsum.photos/v2/list")
      .then((response) => response.json())
      .then((data) => setImageData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handlePhotoPress = (url: string) => {
    setSelectedPhoto(url);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleSearch = (text: string) => {
    setSearchTerm(text);
  };

  const filteredImageData = imageData.filter((photo) => {
    return photo.id.toString().includes(searchTerm);
  });

  return (
    <View style={styles.container}>
      <PhotoGrid
        data={filteredImageData}
        onPress={handlePhotoPress}
        onSearch={handleSearch}
      />
      <Modal
        visible={modalVisible}
        animationType="fade"
        onRequestClose={handleModalClose}
      >
        <PhotoModal url={selectedPhoto} onClose={handleModalClose} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
