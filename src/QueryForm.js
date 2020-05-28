import React from "react";

const QueryForm = (props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.setQuery(props.inputValue.toUpperCase());
      }}>
      <input
        value={props.query}
        onChange={(e) => props.setInputValue(e.target.value)}
      />
      <button>Check Weather</button>
    </form>
  );
};

export default QueryForm;
