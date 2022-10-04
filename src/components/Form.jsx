import React, { useEffect, useState } from "react";
import Weather from "./Weather";
import Forecasts from "./Forecasts";
import "../assets/Form.css";
import Loading from "./Loading";

function Form() {
  const [city, setCity] = useState("new york");
  const [location, setLocation] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fc6c2e350114994164dbd6486046889e&lang=en&units=metric`;

  let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=fc6c2e350114994164dbd6486046889e&lang=en&units=metric`;

  const fetchData = async () => {
    try {
      let response = await fetch(url);
      let forecast = await fetch(forecastUrl);
      if (response.status >= 200 && response.status <= 300) {
        let data = await response.json();
        let forecastData = await forecast.json();
        setLocation(data);
        setForecast(forecastData);
        setLoading(false);
        console.log(forecastData);
      } else alert("Invalid Data");
    } catch (error) {
      console.log(error);
    }
    setCity("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    fetchData(); // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <section className="display-container">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="City..."
            onChange={handleChange}
            value={city}
            className="input"
          />
          <input
            type="submit"
            value="Search"
            className={location.main.temp < 26 ? "btn btn-blue" : "btn btn-red"}
          />
        </form>
        <main className="main-container">
          <Weather city={location} />
          <Forecasts city={forecast} location={location} />
        </main>
      </section>
    );
  }
}

export default Form;
