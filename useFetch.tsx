import axios from "axios";
import { useEffect, useState } from "react";

// Создадим интерфейс для описания структуры данных, которые мы ожидаем получить от API
interface WeatherData {
  current: {
    temp_c: number;
    condition: {
      text: string;
    };
  };
  location: {
    country: string;
    name: string;
  };
}

export const useFetch = (url: string) => {
  const [data, setData] = useState<WeatherData | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get<WeatherData>(url);
        setData(response.data);
      } catch (error) {
        console.log("An error occurred:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [url]);

  return { data, loading };
};
