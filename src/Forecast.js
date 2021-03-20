import React from "react";
import WeatherIcon from "react-icons-weather";

export default function Forecast(props) {
  return (
    <div class="col-2">
      <WeatherIcon
        code={props.response.data.weather[0].description}
        iconId="200"
        flip="horizontal"
        rotate="90"
      />
      <div class="weather-forecast-temperature">
        <strong>${Math.round(props.response.main.temp_max)}°</strong>
      </div>
    </div>
  );
}
