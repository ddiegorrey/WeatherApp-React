import { useState, useEffect } from "react";

interface Props {
  initialCity: string;
}

export default function useWeather({ initialCity }: Props) {
  const [city, setCity] = useState(initialCity);
  const [degrees, setDegrees] = useState(null);
  const [description, setDescription] = useState<string | null>(null);

  const urlBase = "https://api.openweathermap.org/data/2.5/weather?q=";
  const API_KEY = "c0debccf0e7690e23aff38c0d7012b7b";

  const weatherFetch = async () => {
    try {
      const response = await fetch(
        `${urlBase}${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (data.main) {
        setDegrees(data.main.temp);
        setDescription(data.weather[0].description);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    weatherFetch();
  }, [city]);

  return {
    city,
    degrees,
    description,
    setCity,
  };
}
