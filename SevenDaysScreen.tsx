import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Image, StyleSheet } from "react-native";
import axios from "axios";

const SevenDaysScreen: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const urlHolder =
    "http://api.weatherapi.com/v1/forecast.json" +
    "?q=02893" +
    "&days=7" +
    "&key=a704e79f06554918bc6230316231608";
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(urlHolder);
        setWeatherData(response.data?.forecast?.forecastday); // Используйте конкретные данные о прогнозе на 7 дней
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  const getDayOfWeek = (date: string) => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayIndex = new Date(date).getDay();
    return daysOfWeek[dayIndex];
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : weatherData ? (
        // Отобразите данные о погоде для 7 дней
        // Например, можно маппить массив с данными и отрисовывать информацию о погоде для каждого дня
        weatherData.map((day: any) => (
          <View key={day.date} style={styles.weatherItem}>
            <Text style={styles.weatherText}>
              {getDayOfWeek(day.date)} | {day.day.avgtemp_c}°C |{" "}
              {day.day.condition.text}
            </Text>
            <Image
              source={{ uri: "http:" + day.day.condition.icon }}
              style={styles.weatherIcon}
            />
          </View>
        ))
      ) : (
        <Text>No weather data available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  weatherItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  weatherText: {
    marginRight: 10,
  },
  weatherIcon: {
    width: 30,
    height: 30,
  },
});

export default SevenDaysScreen;
