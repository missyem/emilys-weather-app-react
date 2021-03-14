import React from "react";

export default function Weather() {
  let weatherData = {
    city: "Tampa",
    temperature: 78,
    date: "Monday 12:48",
    description: "Sunny",
    imgUrl:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonscout.com%2Ficon%2Fsunny-176&psig=AOvVaw0IaZ2RLtuysEeRHnUx9Tum&ust=1615774280797000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDsyrjaru8CFQAAAAAdAAAAABAD",
    humidity: 20,
    wind: 5
  };

  return (
    <div className="weather">
      <h2 className="date">{weatherData.date}</h2>
      <h1 className="city">{weatherData.city}</h1>
      <div className="details">
        <div className="row">
          <div className="col-4">
            <div className="temp">
              {weatherData.temperature}
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
            <img src={weatherData.imgUrl} alt={weatherData.description} />
          </div>
          <div className="col-4">
            <ul>
              <li>Condition: {weatherData.description}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} mph</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container" className="forecast">
        <div className="row align-items-start">
          <div className="col">One columns</div>
        </div>
      </div>
      <form className="search-form">
        <div className="input-group">
          <input
            type="search"
            className="form-control rounded"
            className="search-city"
            placeholder="Search for a city"
            autocomplete="off"
          />
          <button type="submit" className="btn btn-primary" value="search">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
