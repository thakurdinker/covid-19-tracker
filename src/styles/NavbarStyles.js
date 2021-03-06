import colors from "../constants/colors";

export default {
  nav: {
    marginTop: "12rem",
    // padding: "2rem 5rem",
  },
  navItems: {
    listStyle: "none",
  },
  navItem: {
    marginBottom: "5rem",
    fontWeight: "500",
    position: "relative",
  },
  navLinks: {
    textDecoration: "none",
    color: "inherit",
  },
  iconBox: {
    display: "flex",
    zIndex: "50",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: ".1rem .5rem",

    "& p": {
      zIndex: "50",
    },
  },
  icons: {
    fontSize: "2.5rem",
    zIndex: "50",
    padding: "1rem 0",
  },

  active: {
    "& div": {
      color: (props) =>
        props.isDarkMode ? "rgb(245, 245, 245)" : colors.purple,
      zIndex: "10",
      position: "relative",
      animation: "$float 2s ease infinite",

      "&::before": {
        content: '""',
        position: "absolute",
        width: "155%",
        height: "110%",
        display: "block",
        backgroundColor: (props) =>
          props.isDarkMode ? colors.lightPurple : "rgb(245, 245, 245)",
        transform: "translateX(2rem) skewX(10deg)",
        borderRadius: "25px",
        zIndex: 10,
      },
      "&::after": {
        content: '""',
        position: "absolute",
        width: "130%",
        height: "110%",
        display: "block",
        top: 0,
        left: 0,
        backgroundColor: (props) =>
          props.isDarkMode ? "rgba(255,255,255,.6)nop" : colors.lightPurple,
        transform: "translate(-1rem, .1rem) skew(10deg, -5deg)",
        borderRadius: "25px",
      },
    },
  },

  "@keyframes float": {
    "0%": {
      boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
      transform: "translateY(0px)",
    },
    "50%": {
      boxShadow: "0 25px 15px 0px rgba(0,0,0,0.2)",
      transform: "translateY(-5px)",
    },
    "100%": {
      boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
      transform: "translateY(0px)",
    },
  },
};
