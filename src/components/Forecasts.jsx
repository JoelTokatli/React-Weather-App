import React from "react";
import "../assets/Forecasts.css";
function Forecasts({ city, location }) {
  const { list } = city;
  return (
    <section className="section-container">
      <h3 className="title title-forecast">Next 3 days forecast</h3>
      <ul className="forecast-container">
        <article
          className={
            location.main.temp < 26
              ? "blue dayli-forecast"
              : "red dayli-forecast"
          }
        >
          <div className="icon-img-container">
            <img
              src={`http://openweathermap.org/img/wn/${list[0].weather[0].icon}.png`}
              alt=""
              className="icon-img"
            />
          </div>
          <div className="temp-container">
            <p className="temp">
              min temp: <b>{list[0].main.temp_min}°</b>
            </p>
            <p className="temp">
              max temp:<b>{list[0].main.temp_max}°</b>
            </p>
          </div>
        </article>
        <article
          className={
            location.main.temp < 26
              ? "blue dayli-forecast"
              : "red dayli-forecast"
          }
        >
          <div className="icon-img-container">
            <img
              src={`http://openweathermap.org/img/wn/${list[8].weather[0].icon}.png`}
              alt=""
              className="icon-img"
            />
          </div>
          <div className="temp-container">
            <p className="temp">
              min temp: <b>{list[8].main.temp_min}°</b>
            </p>
            <p className="temp">
              max temp:<b>{list[8].main.temp_max}°</b>
            </p>
          </div>
        </article>
        <article
          className={
            location.main.temp < 26
              ? "blue dayli-forecast"
              : "red dayli-forecast"
          }
        >
          <div className="icon-img-container">
            <img
              src={`http://openweathermap.org/img/wn/${list[16].weather[0].icon}.png`}
              alt=""
              className="icon-img"
            />
          </div>
          <div className="temp-container">
            <p className="temp">
              min temp: <b>{list[16].main.temp_min}°</b>
            </p>
            <p className="temp">
              max temp:<b>{list[16].main.temp_max}°</b>
            </p>
          </div>
        </article>
      </ul>
    </section>
  );
}

export default Forecasts;
