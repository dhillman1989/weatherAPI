const dawn = 7;
const dusk = 21;

const styles = {
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

  container: {
    fontFamily: "sans-serif",
    textAlign: "center",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    overflow: "hidden",
    height: "100vh",
    transition: "background-color 4s",
    background: (props) =>
      props.weather.time_hours > dawn && props.weather.time_hours < dusk
        ? "rgb(44,135,255)"
        : "rgb(6, 50, 107)",
    "& h1,h2,h3,h4,h5,h6,p,span,a": {
      zIndex: "0",
      textShadow: "2px 2px 5px #000",
      textWrap: "wrap"
    },
    "& .sunMoon": {
      width: "75px",
      height: "75px",
      zIndex: "1",
      position: "absolute",
      left: "-10%",
      opacity: (props) =>
        props.weather.condition.toLowerCase().includes("sun") ||
        (props.weather.time_hours < dawn || props.weather.time_hours > dusk)
          ? 1
          : 0,
      backgroundColor: (props) =>
        props.weather.time_hours > dawn && props.weather.time_hours < dusk
          ? "rgb(255, 195, 82)"
          : "rgb(230,230,230)",
      borderRadius: "50%",
      top: "50px",
      boxShadow: (props) =>
        props.weather.time_hours > dawn && props.weather.time_hours < dusk
          ? "0 0 10px 5px rgb(255, 205, 69)"
          : "0 0 10px 5px #fff",
      transition: "all 4s",
      background: "#fff",
      transform: (props) =>
        props.weather.time_hours > dawn && props.weather.time_hours < dusk
          ? "translateX(0vw)"
          : "translateX(50vw)"
    }
  },
  overcastLayer: {
    width: "100vw",
    height: "100vh",
    position: "absolute",
    zIndex: 1,
    backgroundColor: (props) =>
      props.weather.condition.toLowerCase().includes("overcast")
        ? "rgb(99,99,99)"
        : "transparent",
    background: (props) =>
      props.weather.condition.toLowerCase().includes("overcast")
        ? "linear-gradient(180deg, rgba(99,99,99,1) 7%, rgba(144,144,144,1) 32%, rgba(44,135,255,1) 100%)"
        : "transparent"
  },

  Report: {
    display: "flex",
    flexDirection: "Column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    padding: "0 20px",
    "& .time, span, p, h1, h2, h3, h4, h5, h6": {
      zIndex: "40"
    },
    "& .sunMoon": {
      width: "75px",
      height: "75px",
      zIndex: "1",
      position: "absolute",
      left: "25%",
      backgroundColor: "rgb(255, 195, 82)",
      borderRadius: "50%",
      top: "50px",
      boxShadow: "0 0 10px 5px rgb(255, 205, 69)",
      transform: "translateX(0vw)",
      transition: "all 4s"
    }
  },

  clouds: {
    zIndex: "3",
    animationName: "cloudflow",
    animationIterationCount: "infinite",
    animationDirection: "forwards",
    animationTimingFunction: "linear",
    fontSize: "5rem",
    position: "absolute",
    right: "-100px",
    transition: "opacity 2s",
    opacity: (props) =>
      props.weather.condition.includes("cloud") ? "0.7" : "0"
  },

  cloud1: {
    top: "15%",
    animationDuration: "16s",
    animationDelay: "5s"
  },
  cloud2: {
    top: "25%",
    animationDuration: ""
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
    zIndex: "3",
    animationName: "snowfall",
    animationIterationCount: "infinite",
    animationDirection: "forwards",
    animationTimingFunction: "linear",
    position: "absolute",
    transition: "opacity 2s",
    fontSize: "5rem",
    top: "-100px",
    opacity: (props) => (props.weather.condition.includes("snow") ? "0.7" : "0")
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
  }
};

export default styles;
