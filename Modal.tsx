import { View, Image } from "react-native";

const Modal = () => {
  return (
    <View>
      <Image
        source={{ uri: selectedImage }}
        style={{ width: 50, height: 50 }}
      />
    </View>
  );
};
export default Modal;
