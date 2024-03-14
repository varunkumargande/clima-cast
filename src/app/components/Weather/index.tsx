// components/Weather.tsx
import { WeatherProps } from "@/app/types/types";
import React from "react";
import ReactWeather from "react-open-weather";
import useOpenWeather from "@/app/hooks/useOpenWeather";
import { useTheme } from "@/app/context/ThemeContext";

const Weather: React.FC<WeatherProps> = ({ location }) => {
  const { theme } = useTheme();

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: process.env.NEXT_PUBLIC_OPEN_WHEATHER_APP_ID,
    lat: location?.lat || 53.54,
    lon: location?.lon || 9.98,
    lang: "en",
    unit: "metric",
  });

  return (
    <div>
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel={location?.name || "Hamburg"}
        unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
        showForecast
        theme={theme === "dark" ? {} : undefined}
      />
    </div>
  );
};

export default Weather;
