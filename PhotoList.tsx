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
  Platform,
  StatusBar,
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
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

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
  const handleImagePress = (id: number, url: string) => {
    navigation.navigate("PhotoView", { id, url });
  };

  const filteredImages = imageData.filter((image) =>
    image.id.toString().includes(searchTerm)
  );

  const verticalMargin = useSharedValue(2);
  const spinValue = useSharedValue(0); // Добавлен параметр для вращения

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      const newMargin = 2 + event.contentOffset.y / 30;

      if (newMargin < 2) {
        verticalMargin.value = 2;
      } else if (newMargin > 20) {
        verticalMargin.value = 20;
      } else {
        verticalMargin.value = newMargin;
      }

      // Добавлена логика для вращения в зависимости от скролла
      spinValue.value = event.contentOffset.y / 100;
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      marginVertical: verticalMargin.value,
      transform: [{ rotate: `${spinValue.value}deg` }], // Добавлено вращение
    };
  });
  return (
    <View style={styles.container}>
      <TextInput
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Search..."
        style={styles.searchInput}
      />
      <Animated.FlatList
        data={filteredImages}
        numColumns={3}
        onScroll={scrollHandler}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PhotoCard
            url={item.url}
            styles={[styles.thumbnail, animatedStyle]}
            onPress={() => handleImagePress(item.id, item.url)}
          />
        )}
      />

      {/* 

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
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  searchInput: {
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginTop: 10,
    height: 40,
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
  thumbnail: {
    margin: 2,
    borderRadius: 10,
    width: 100,
    height: 100,
  },
});
