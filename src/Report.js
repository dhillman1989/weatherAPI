import React, { useEffect, useState } from "react";
import axios from "axios";

import QueryForm from "./QueryForm";
import { withStyles } from "@material-ui/styles";

import styles from "./styles/ReportStyles";

const Report = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
  const {
    inputValue,
    weather,
    api_url,
    setWeather,
    setInputValue,
    setQuery,
    classes
  } = props;
  useEffect(() => {
    async function fetch() {
      try {
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
        setErrorMessage("");
      } catch (err) {
        setErrorMessage("Sorry, no match found... try again!");
      }
    }
    fetch();
  }, [api_url, setWeather]);

  return (
    <div className={classes.container}>
      <div className={classes.mist} />
      <div className={classes.overcastLayer} />
      <div className={classes.rain} />
      <div className={classes.lightning} />
      <div className={classes.Report}>
        {/* Sun/Moon*/}
        <div className="sunMoon" />

        {/*  clouds */}
        <div>
          <i
            id="cloud1"
            className={`fas fa-cloud  ${classes.clouds} ${classes.cloud1}`}
          />
          <i
            id="cloud2"
            className={`fas fa-cloud  ${classes.clouds} ${classes.cloud2}`}
          />
          <i
            id="cloud3"
            className={`fas fa-cloud  ${classes.clouds} ${classes.cloud3}`}
          />
        </div>

        {/* snowflakes */}
        <i
          className={`fas fa-snowflake ${classes.snowflakes} ${classes.snow1}`}
        />
        <i
          className={`fas fa-snowflake ${classes.snowflakes} ${classes.snow2}`}
        />
        <i
          className={`fas fa-snowflake ${classes.snowflakes} ${classes.snow3}`}
        />

        {/* Main Details */}
        <div className="time">
          <span>
            Accurate at: {weather.time_hours}:{weather.time_minutes}
          </span>
        </div>
        <h1>{weather.town}</h1>
        <h4>
          {weather.region}, {weather.country}
        </h4>
        <h5>
          {weather.tempC}&#730;c - {weather.tempF}&#730;F
          <br />
          {weather.condition}
        </h5>

        <QueryForm
          setInputValue={setInputValue}
          inputValue={inputValue}
          setWeather={setWeather}
          setQuery={setQuery}
          errorMessage={errorMessage}
        />
      </div>
    </div>
  );
};

export default withStyles(styles)(Report);
