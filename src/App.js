import React, { useState } from "react";

import Report from "./Report";

const API = "https://api.weatherapi.com/v1/current.json";
const API_KEY = "d46f7b4a013944ba8b1125130202605";

function App(props) {
  const { classes } = props;
  const [weather, setWeather] = useState({
    town: "Loading",
    region: "",
    country: "",
    tempC: null,
    tempF: null,
    condition: "Loading",
    time_hours: "12",
    time_minutes: "00"
  });

  const [API_QUERY, setAPI_QUERY] = useState("london");
  const API_ENDPOINT = `${API}?key=${API_KEY}&q=${API_QUERY}`;

  return (
    <div className="App">
      <Report
        query={API_QUERY}
        weather={weather}
        time_hours={weather.time_hours}
        api_url={API_ENDPOINT}
        setWeather={setWeather}
        setQuery={setAPI_QUERY}
      />
    </div>
  );
}

export default App;
