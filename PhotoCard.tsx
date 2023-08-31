import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";

interface PhotoCardProps {
  url: string;
  onPress: () => void;
  styles: any;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ url, onPress, styles }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.Image
        sharedTransitionTag={`tag-${url}`}
        style={[styles.image, styles]}
        source={{ uri: url }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    margin: 4,
  },
});

export default PhotoCard;
