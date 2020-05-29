const styles = {
  QueryForm: {
    "& form": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& input, button": {
        width: "10rem",
        padding: "0.25rem",
        fontSize: "20px",
        textAlign: "center",
        borderRadius: "10px",
        border: "none",
        marginBottom: "10px",
        boxSizing: "border-box",
        boxshadow: "5px 5px 5px rgba(0, 0, 0, 0.3)"
      },
      "& button": {
        background: "rgb(201, 255, 75)",
        color: "#000",
        "&:hover": {
          boxShadow: "inset 0 0 10px rgb(0, 100, 150)"
        }
      }
    },
    "& #errorMessage": {
      color: "orange",
      fontSize: "0.8rem"
    }
  }
};

export default styles;
