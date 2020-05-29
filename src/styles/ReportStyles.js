const styles = {
  Report: {
    display: "flex",
    flexDirection: "Column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    margin: "0 20px",
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
      transition: "all 4s",
      opacity: (props) =>
        props.weather.condition.toLowerCase().includes("sun") ? "1" : "0"
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
  }
};

export default styles;
