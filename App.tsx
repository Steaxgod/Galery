import { StyleSheet, View } from "react-native";
import PhotoList from "./PhotoList";
import { PhotoView } from "./PhotoView";
import Modal from "./Modal";
import { Weather } from "./Weather";
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
import { createDrawerNavigator } from "@react-navigation/drawer";
import PhotoCard from "./PhotoCard";

const Stack = createStackNavigator<StackParamList>();
const Drawer = createDrawerNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerPosition: "left",
          drawerType: "front",
        }}
      >
        <Drawer.Screen name="PhotoList" component={PhotoList} />
        <Drawer.Screen name="Wheater" component={Weather} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const Photo = () => {
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
