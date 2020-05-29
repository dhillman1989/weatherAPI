import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";

import styles from "./styles/appStyles";
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
    time_hours: null,
    time_minutes: null
  });

  const [API_QUERY, setAPI_QUERY] = useState("london");
  const API_ENDPOINT = `${API}?key=${API_KEY}&q=${API_QUERY}`;

  return (
    <div
      className={
        weather.time_hours > 8 && weather.time_hours < 20
          ? classes.App
          : `${classes.App} ${classes.nightMode}`
      }>
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

export default withStyles(styles)(App);
