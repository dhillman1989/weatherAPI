import React, { useState, useEffect } from "react";
import axios from "axios";

const API = "https://api.weatherapi.com/v1/current.json";
const API_KEY = "d46f7b4a013944ba8b1125130202605";

const Report = () => {
  const [weather, setWeather] = useState("No Location Selected");
  useEffect(() => {
    async function fetch() {
      const res = await axios.get(`${API}?key=${API_KEY}&q=le111rx`);
      const data = res.data;
      console.log(data);
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
  }, []);
  return (
    <div className={weather.time_hours >= 19 ? "Report nightMode" : "Report"}>
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
    </div>
  );
};

export default Report;
