import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Modal,
  TouchableOpacity,
} from "react-native";
import PhotoCard from "./PhotoCard";
import "react-native-gesture-handler";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import PhotoView from "./PhotoCard";
import { useNavigation } from "@react-navigation/native";
import { StackParamList } from "./App";

interface ImageData {
  id: number;
  url: string;
}
const imageData: ImageData[] = [];
for (let i = 1; i < 70; i++) {
  imageData.push({ id: i, url: `https://picsum.photos/id/${i}/200` });
}

type PhotoListNavigationProp = StackNavigationProp<StackParamList, "PhotoList">;

const PhotoList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const navigation = useNavigation<PhotoListNavigationProp>();
  const handleImagePress = (url: string) => {
    navigation.navigate("PhotoView", { id: 123, url });
  };
  const filteredImages = imageData.filter((image) =>
    image.id.toString().includes(searchTerm)
  );
  return (
    <View style={styles.container}>
      <TextInput
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Search..."
        style={styles.searchInput}
      />
      <FlatList
        data={filteredImages}
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PhotoCard
            url={item.url}
            onPress={() => handleImagePress(item.url)}
          />
        )}
      />

      {/* <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalContainer}
          onPress={() => setModalVisible(false)}
        >
          <Image source={{ uri: selectedImage }} style={styles.modalImage} />
        </TouchableOpacity>
      </Modal> */}
    </View>
  );
};
export default PhotoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 32,
  },
  searchInput: {
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  modalImage: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
});
