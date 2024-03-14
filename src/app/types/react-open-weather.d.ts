declare module 'react-open-weather' {
  import React from 'react';
  
  interface ReactWeatherProps {
    isLoading: boolean;
    errorMessage: string | null;
    data: any;
    lang?: string;
    locationLabel?: string;
    unitsLabels?: {
      temperature: string;
      windSpeed: string;
    };
    showForecast: boolean;
    theme?: {};
  }

  const ReactWeather: React.FC<ReactWeatherProps>;
  export default ReactWeather;
}