import React, { useState } from "react";
import "./styles.css";

import "./styles.css";
import Report from "./Report";

const API = "https://api.weatherapi.com/v1/current.json";
const API_KEY = "d46f7b4a013944ba8b1125130202605";

export default function App() {
  const [weather, setWeather] = useState("");
  const [API_QUERY, setAPI_QUERY] = useState("london");
  const [inputValue, setInputValue] = useState("london");
  const API_ENDPOINT = `${API}?key=${API_KEY}&q=${API_QUERY}`;

  return (
    <div
      className={
        weather.time_hours >= 19 || weather.time_hours <= 7
          ? "App nightMode"
          : "App"
      }>
      <Report
        query={API_QUERY}
        weather={weather}
        api_url={API_ENDPOINT}
        setWeather={setWeather}
        setQuery={setAPI_QUERY}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
    </div>
  );
}
