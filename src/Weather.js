import React, { useState } from "react";
import axios from "axios";
import Date from "./Date.js";
import Forecast from "./Forecast.js";

function showWeather(props, response) {
  const [city, setCity] = useState(props.city);
  const [weather, setWeather] = useState({ loaded: false });
  function Search(props) {
    setWeather({
      loaded: true,
      temperature: props.response.data.main.temp,
      description: props.response.data.weather[0].description,
      humidity: props.response.data.main.humidity,
      wind: props.response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
    function handleSubmit(event) {
      event.preventDefault();
      let apiKey = "1c65055fa7a87b18286fcb787f8f8760";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
      axios.get(url).then(showWeather);
    }
    function updateCity(event) {
      setCity(event.target.value);
    }
    let form = (
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search for a city"
            autocomplete="off"
            autoFocus="on"
            onChange={updateCity}
          />
          <button type="submit" className="btn btn-primary" value="search">
            Search
          </button>
        </div>
      </form>
    );
  }

  if (weather.loaded) {
    return (
      <div className="weather">
        <Date />
        <h1 className="city">{weather.city}</h1>
        <div className="details">
          <div className="row">
            <div className="col-4">
              <div className="temp">
                {props.weather.temperature}
                <span className="units">
                  <a href="/" className="celsius-link">
                    °C
                  </a>{" "}
                  |
                  <a href="/" className="fahrenheit-link">
                    °F
                  </a>
                </span>
              </div>
            </div>
            <div className="col-4">
              <img src={props.weather.imgUrl} alt={props.weather.description} />
            </div>
            <div className="col-4">
              <ul>
                <li>Condition: {props.weather.description}</li>
                <li>Humidity: {props.weather.humidity}%</li>
                <li>Wind: {props.weather.wind} mph</li>
              </ul>
            </div>
          </div>
        </div>
        <Forecast />
        <Search />
      </div>
    );
  } else {
    showWeather();
    return "Loading...";
  }
}
