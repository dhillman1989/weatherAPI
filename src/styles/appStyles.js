const styles = () => ({
  root: {
    padding: "0",
    margin: "0",
    overflow: "hidden"
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
    "& h1,h2,h3,h4,h5,h6,p,span,a,div": {
      zIndex: "0",
      textShadow: "2px 2px 5px #000"
    }
  },
  nightMode: {
    backgroundColor: "rgb(6, 50, 107)"
  },
  sun: {
    width: "75px",
    height: "75px",
    zIndex: "2",
    position: "absolute",
    left: "50px",
    background: "rgb(255, 195, 82)",
    borderRadius: "50%",
    top: "50px",
    boxShadow:
      "0 0 20px 10px inset rgb(255, 205, 69), 0 0 10px 5px rgb(255, 205, 69)"
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
    animationDuration: "15s",
    animationDelay: "3s"
  },

  "@keyframes cloudflow": {
    "0%": {
      transform: "translateX(0)"
    },
    "100%": {
      transform: "translateX(-125vw)"
    }
  }
});
export default styles;
