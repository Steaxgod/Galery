import React from "react";
import { StyleSheet, View } from "react-native";
import PhotoList from "./PhotoList";
import { PhotoView } from "./PhotoView";
import Modal from "./Modal";
import { Weather } from "./Weather";
import { WeatherList } from "./WeatherList";
import FiveDaysScreen from "./FiveDaysScreen";
import SevenDaysScreen from "./SevenDaysScreen";
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
import { createDrawerNavigator } from "@react-navigation/drawer";
import PhotoCard from "./PhotoCard";

export type StackParamList = {
  PhotoList: undefined;
  PhotoView: { id: number; url: string };
  Modal: { url: string };
};

const Stack = createStackNavigator<StackParamList>();
const Drawer = createDrawerNavigator();

const PhotoStack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerPosition: "left",
          drawerType: "front",
        }}
      >
        <Drawer.Screen name="PhotoList" component={PhotoStackScreen} />
        <Drawer.Screen name="Weather" component={Weather} />
        <Drawer.Screen name="WeatherList" component={WeatherList} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const PhotoStackScreen: React.FC = () => {
  return (
    <PhotoStack.Navigator>
      <PhotoStack.Screen name="PhotoList" component={PhotoList} />
      <PhotoStack.Screen name="PhotoView" component={PhotoView} />
      <PhotoStack.Screen name="Modal" component={Modal} />
    </PhotoStack.Navigator>
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
