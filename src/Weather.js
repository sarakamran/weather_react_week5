import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready:false});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready:true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      date:"Wendnesday 07:00",
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/48/sunny.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
                id="icon"
              />
              <span className="float-left">
                <strong id="temperature">{weatherData.temperature}</strong>
                <span className="units">
                  <small>
                    {" "}
                    <a href="#" id="celsius-link" className="active">
                      °C
                    </a>
                    |{" "}
                    <a href="#" id="fahrenheit-link">
                      °F
                    </a>
                  </small>
                </span>
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Humidity: <span id="humidity">{weatherData.humidity}</span> %
              </li>
              <li className="lowerize">
                Wind: <span id="wind">{weatherData.wind}</span> km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "094780c710fa4efd669f0df8c3991927";
    let city = props.defaultCity;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading ...";
  }
}
