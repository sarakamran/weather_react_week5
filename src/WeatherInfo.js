import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    console.log(props.data.city);
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">
          {props.data.description}
        </li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="float-left"
              id="icon"
            />
            <span className="float-left">
              <strong id="temperature">
                {props.data.temperature}
              </strong>
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
              Humidity:{" "}
              <span id="humidity">{props.data.humidity}</span> %
            </li>
            <li className="lowerize">
              Wind: <span id="wind">{props.data.wind}</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
