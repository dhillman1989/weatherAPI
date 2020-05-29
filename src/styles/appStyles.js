const styles = {
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
    width: "100vw",
    overflow: "hidden",
    height: "100vh",
    transition: "background-color 4s",
    background: "rgb(44, 135, 255)",
    "& h1,h2,h3,h4,h5,h6,p,span,a": {
      zIndex: "0",
      textShadow: "2px 2px 5px #000",
      textWrap: "wrap"
    }
  },
  nightMode: {
    backgroundColor: "rgb(6, 50, 107)",
    height: "100vh",
    "& .sunMoon": {
      background: "#fff",
      boxShadow: "0 0 10px 5px #fff",
      transform: "translateX(50vw)"
    }
  }
};

export default styles;
