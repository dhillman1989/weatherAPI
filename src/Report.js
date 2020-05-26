import React, { useEffect } from "react";
import axios from "axios";

import QueryForm from "./QueryForm";

const Report = (props) => {
  const { query, weather, api_url, setWeather, setQuery } = props;
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
        time_hours: data.current.last_updated.split(" ")[1].split(":")[0],
        time_minutes: data.current.last_updated.split(" ")[1].split(":")[1]
      });
    }
    fetch();
  }, [weather]);
  const cloudStyle = `fas fa-cloud ${weather.tempC <= 30 && "rainCloud"}`;

  return (
    <div
      className={
        weather.time_hours >= 19 || weather.time_hours <= 6
          ? "Report nightMode"
          : "Report"
      }>
      <i id="cloud1" className={cloudStyle} />
      <i id="cloud2" className={cloudStyle} />
      <i id="cloud3" className={cloudStyle} />
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

      <QueryForm setQuery={setQuery} query={query} setWeather={setWeather} />
    </div>
  );
};

export default Report;
