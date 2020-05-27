import React, { useEffect } from "react";
import axios from "axios";

import QueryForm from "./QueryForm";

const Report = (props) => {
  const {
    inputValue,
    weather,
    api_url,
    setWeather,
    setInputValue,
    setQuery
  } = props;
  useEffect(() => {
    async function fetch() {
      const res = await axios.get(api_url);
      const data = res.data;
      setWeather({
        town: data.location.name,
        region: data.location.region,
        country: data.location.country,
        tempC: data.current.temp_c,
        tempF: data.current.temp_f,
        condition: data.current.condition.text,
        time_hours: data.current.last_updated.split(" ")[1].split(":")[0],
        time_minutes: data.current.last_updated.split(" ")[1].split(":")[1]
      });
    }
    fetch();
  }, [api_url, setWeather]);
  const cloud =
    weather.condition && weather.condition.toLowerCase().includes("cloud");
  const sun =
    weather.condition && weather.condition.toLowerCase().includes("sun");
  const snow =
    weather.condition && weather.condition.toLowerCase().includes("snow");

  return (
    <div
      className={
        weather.time_hours >= 19 || weather.time_hours <= 6
          ? "Report nightMode"
          : "Report"
      }>
      {/* Sun */}
      {sun && <div className="sun" />}

      {/*  clouds */}
      {cloud && (
        <div>
          <i id="cloud1" className="fas fa-cloud" />
          <i id="cloud2" className="fas fa-cloud" />
          <i id="cloud3" className="fas fa-cloud" />
        </div>
      )}

      {/* snowflakes */}
      {snow && <i id="snow1" />}

      {/* Main Details */}
      <div className="time">
        Accurate at: {weather.time_hours}:{weather.time_minutes}
      </div>
      <h1>{weather.town}</h1>
      <h4>
        {weather.region}, {weather.country}
      </h4>
      <h5>
        {weather.tempC}&#730;c - {weather.tempF}&#730;F
      </h5>

      <QueryForm
        setInputValue={setInputValue}
        inputValue={inputValue}
        setWeather={setWeather}
        setQuery={setQuery}
      />
    </div>
  );
};

export default Report;
