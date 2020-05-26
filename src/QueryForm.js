import React, { useState } from "react";

const QueryForm = (props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.setWeather(props.query);
      }}>
      <input
        value={props.query}
        onChange={(e) => props.setQuery(e.target.value)}
      />
      <button>Check Weather</button>
    </form>
  );
};

export default QueryForm;
