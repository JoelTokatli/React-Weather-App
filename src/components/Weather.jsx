import React from "react";
import "../assets/Weather.css";
import { FaSkyatlas, FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

function Weather({ city }) {
  const { name, sys, weather, main, wind } = city;
  const { country } = sys;
  const { temp, humidity } = main;
  const { speed } = wind;

  return (
    <section className="weather-container">
      <article className={temp <= 26 ? "card cold" : "card hot"}>
        <div
          className={temp <= 26 ? "card-container blue" : "card-container red"}
        >
          <h2 className="title">
            {name},{country}.
          </h2>
          <div className="weather-icon-container">
            <img
              src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
              alt="weather"
              className="weather-icon"
            />
          </div>
          <p className="weather">{temp}°C</p>
          <div className="info">
            <p className="text">
              Description: <b>{weather[0].description}.</b>
              <FaSkyatlas className="icon" />
            </p>
            <p className="text">
              Wind Speed: <b>{speed}M/s.</b>
              <FaWind className="icon" />
            </p>
            <p className="text">
              Humidity: <b>{humidity}%.</b>
              <WiHumidity className="icon" />
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Weather;
