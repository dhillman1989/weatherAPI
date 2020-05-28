const styles = () => ({
  //GLOBAL ANIMATIONS//
  "@global": {
    "@keyframes cloudflow": {
      "0%": {
        transform: "translateX(0)"
      },
      "100%": {
        transform: "translateX(-125vw)"
      }
    },
    "@keyframes snowfall": {
      "0%": {
        transform: "translate(0, 0)"
      },
      "50%": {
        transform: "translate(-20px, 62vh)"
      },
      "100%": {
        transform: "translate(0, 125vh)"
      }
    }
  },

  App: {
    fontFamily: "sans-serif",
    textAlign: "center",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    height: "100vh",
    background: "rgb(44, 135, 255)",
    padding: "10px",
    "& h1,h2,h3,h4,h5,h6,p,span,a": {
      zIndex: "0",
      textShadow: "2px 2px 5px #000"
    },
    "& .sunMoon": {
      width: "75px",
      height: "75px",
      zIndex: "2",
      position: "absolute",
      left: "25%",
      backgroundColor: "rgb(255, 195, 82)",
      borderRadius: "50%",
      top: "50px",
      boxShadow: "0 0 10px 5px rgb(255, 205, 69)",
      transform: "translateX(0vw)",
      transition: "transform 4s, background-color 4s "
    }
  },
  nightMode: {
    backgroundColor: "rgb(6, 50, 107)",
    height: "100vh",
    "& .sunMoon": {
      background: "#fff",
      boxShadow: "0 0 20px 10px #fff",
      transform: "translateX(50vw)"
    }
  },
  Report: {
    display: "flex",
    flexDirection: "Column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    overflow: "hidden",
    "& .time, div, span, p, h1, h2": {
      zIndex: "3"
    }
  },

  clouds: {
    zIndex: "0",
    animationName: "cloudflow",
    animationIterationCount: "infinite",
    animationDirection: "forwards",
    animationTimingFunction: "linear",
    fontSize: "5rem",
    position: "absolute",
    right: "-100px"
    // fontSize: (props) => (props.time_hours >= 15 ? "2em" : "6em")
  },

  cloud1: {
    top: "15%",
    animationDuration: "16s",
    animationDelay: "5s"
  },
  cloud2: {
    top: "25%",
    animationDuration: "14s"
  },

  cloud3: {
    top: "35%",
    animationDuration: "10s",
    animationDelay: "3s"
  },

  hidden: {
    display: "hidden"
  },

  snowflakes: {
    zIndex: "0",
    animationName: "snowfall",
    animationIterationCount: "infinite",
    animationDirection: "forwards",
    animationTimingFunction: "linear",
    position: "absolute",
    fontSize: "5rem",
    top: "-100px"
  },

  snow1: {
    left: "25%",
    animationDuration: "10s",
    animationDelay: "4s"
  },

  snow2: {
    left: "50%",
    animationDuration: "10s"
  },

  snow3: {
    left: "75%",
    animationDuration: "10s",
    animationDelay: "2s"
  },
  QueryForm: {
    "& form": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& input, button": {
        width: "15rem",
        padding: "0.5rem",
        fontSize: "30px",
        borderRadius: "20px",
        border: "none",
        marginBottom: "10px",
        boxshadow: "5px 5px 5px rgba(0, 0, 0, 0.3)"
      },
      "& button": {
        background: "rgb(201, 255, 75)"
      }
    }
  }
});

export default styles;
