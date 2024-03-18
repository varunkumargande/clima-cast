// components/Weather.tsx
import { WeatherProps } from "@/app/types/types";
import React, { useMemo } from "react";
import ReactWeather from "react-open-weather";
import useOpenWeather from "@/app/hooks/useOpenWeather";
import { useTheme } from "@/app/context/ThemeContext";

const Weather: React.FC<WeatherProps> = ({ location }) => {
  const { theme } = useTheme();

  const {
    data: weatherData,
    isLoading,
    errorMessage,
  } = useOpenWeather({
    key: process.env.NEXT_PUBLIC_OPEN_WHEATHER_APP_ID,
    lat: location?.lat || 53.54,
    lon: location?.lon || 9.98,
    lang: "en",
    unit: "metric",
  });

  const showWeatherData = useMemo(
    () => (
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={weatherData}
        lang="en"
        locationLabel={location?.name || "Hamburg"}
        unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
        showForecast
        theme={theme === "dark" ? {} : undefined}
      />
    ),
    [weatherData, location]
  );

  return <div>{showWeatherData}</div>;
};

export default Weather;
