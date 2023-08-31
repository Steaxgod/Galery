import { StyleSheet, View } from "react-native";
import PhotoList from "./PhotoList";
import { PhotoView } from "./PhotoView";
import Modal from "./Modal";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  DrawerActions,
  NavigationContainer,
  RouteProp,
  StackActions,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";

export type StackParamList = {
  PhotoList: undefined;
  PhotoView: { id: number; url: string };
  Modal: { url: string };
};

const Stack = createNativeStackNavigator<StackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PhotoList" component={PhotoList} />
        <Stack.Screen name="PhotoView" component={PhotoView} />
        <Stack.Screen name="Modal" component={Modal} />
      </Stack.Navigator>

      {/* <View style={styles.container}>
        <PhotoList />
      </View> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
