import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackParamList } from "./App";
import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";

type PhotoViewNavigationProp = StackNavigationProp<StackParamList, "PhotoView">;
type PhotoViewRouteProp = RouteProp<StackParamList, "PhotoView">;

export function PhotoView() {
  const navigation = useNavigation<PhotoViewNavigationProp>();
  const { params } = useRoute<PhotoViewRouteProp>();

  navigation.setOptions({ title: params.url });

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Photo Info</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Modal", { url: params.url })}
      >
        <Image
          source={{ uri: params.url }}
          style={{ width: 380, height: 250, margin: 10, borderRadius: 30 }}
        />
      </TouchableOpacity>
      <Text>{params.url} </Text>
      <Text>---------------------------------</Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
      <Text></Text>
      <Button title="Back" onPress={() => navigation.navigate("PhotoList")} />
    </View>
  );
}
