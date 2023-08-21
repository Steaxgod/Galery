import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import axios from "axios";
import { useFetch } from "./useFetch";

export const Weather = () => {
  const urlHolder =
    "http://api.weatherapi.com/v1/" +
    "current.json" +
    "?q=02893" +
    "&key=a704e79f06554918bc6230316231608";

  const [zipcode, setZipCode] = useState("02893");
  const { data, loading } = useFetch(urlHolder);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Weather for {zipcode}</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : data ? (
        <View style={styles.centeredContainer}>
          <Image
            source={{ uri: "http:" + data.current?.condition?.icon }}
            style={styles.icon}
          />
          <Text style={styles.txt}>
            Temperature: {data.current?.temp_c || "N/A"}°C
          </Text>
          <Text style={styles.txt}>
            Condition: {data.current?.condition.text || "N/A"}
          </Text>
          <Text style={styles.txt}>
            Country: {data.location?.country || "N/A"}
          </Text>
          <Text style={styles.txt}>
            Location: {data.location?.name || "N/A"}
          </Text>
        </View>
      ) : (
        <Text>No data available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    width: 128, // Make it larger
    height: 128, // Make it larger
  },
  header: {
    fontSize: 50,
    textAlign: "center",
    marginBottom: -150,
  },
  txt: {
    fontSize: 25,
    margin: 5,
  },
});

export default Weather;
