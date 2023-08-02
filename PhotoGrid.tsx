import React from "react";
import {
  View,
  FlatList,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

interface ImageData {
  id: number;
  url: string;
}

interface PhotoGridProps {
  data: ImageData[];
  onPress: (url: string) => void;
  onSearch: (text: string) => void;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ data, onPress, onSearch }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by ID"
        onChangeText={onSearch}
      />
      <FlatList
        data={data}
        numColumns={3} // 3 столбца в сетке
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onPress(item.url)}>
            <Image source={{ uri: item.url }} style={styles.image} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
});

export default PhotoGrid;
