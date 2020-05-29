import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/QueryFormStyles";

const QueryForm = (props) => {
  const [inputValue, setInputValue] = useState("london");
  const { classes, errorMessage } = props;
  return (
    <div className={classes.QueryForm}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.setQuery(inputValue.toUpperCase());
        }}>
        <input
          value={props.query}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Check Weather</button>
        <span id="errorMessage">{errorMessage}</span>
      </form>
    </div>
  );
};

export default withStyles(styles)(QueryForm);
