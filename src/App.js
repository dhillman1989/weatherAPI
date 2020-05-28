import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";

import styles from "./styles/appStyles";
import Report from "./Report";

const API = "https://api.weatherapi.com/v1/current.json";
const API_KEY = "d46f7b4a013944ba8b1125130202605";

function App(props) {
  const [weather, setWeather] = useState("");
  const [API_QUERY, setAPI_QUERY] = useState("london");
  const [inputValue, setInputValue] = useState("london");
  const API_ENDPOINT = `${API}?key=${API_KEY}&q=${API_QUERY}`;

  return (
    <div
      className={
        weather.time_hours >= 19 || weather.time_hours <= 7
          ? props.classes.nightMode
          : props.classes.App
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

export default withStyles(styles)(App);
