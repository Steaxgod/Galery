import { View, Text, Button, Image } from "react-native";
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
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Photo Info</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Modal", { url: params.url })}
      />
      <Image source={{ uri: params.url }} style={{ width: 50, height: 50 }} />
    </View>
  );
}
