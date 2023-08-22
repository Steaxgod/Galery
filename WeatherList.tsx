import React, { useLayoutEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FiveDaysScreen from "./FiveDaysScreen";
import SevenDaysScreen from "./SevenDaysScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StackNavigationProp } from "@react-navigation/stack";
export type StackParamList = {
  Home: undefined;
  Details: { itemID: number; otherParam?: string };
  Modal: undefined;
  Cool: undefined;
};

const Tab = createBottomTabNavigator();

type HomeScreenNavigationProp = StackNavigationProp<StackParamList, "Home">;

export function WeatherList() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarBadge: 1,
    });
  });

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconText: string;

          if (route.name === "Five Days") {
            iconText = "5";
          } else if (route.name === "Seven Days") {
            iconText = "7";
          }

          return <Text style={{ color, fontSize: size }}>{iconText}</Text>;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Five Days" component={FiveDaysScreen} />
      <Tab.Screen name="Seven Days" component={SevenDaysScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  closeButtonContainer: {
    marginLeft: 10,
  },
  closeButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black", // Customize the color as per your preference
  },
});
