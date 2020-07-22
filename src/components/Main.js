import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "@material-ui/core";
import useWebAnimations, { slideInUp } from "@wellyshen/use-web-animations";
import MainImg from "../images/main.jpeg";

const useStyles = makeStyles(() => ({
  img: {
    backgroundImage: `url(${MainImg})`,
    height: "100vh",
    position: "relative",
    textAlign: "center",
    color: "white",
  },
  centered: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  myIcon: {
    position: "absolute",
    bottom: "0%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "black",
    background: "white",
    borderRadius: "30px",
    width: "50px",
    height: "50px",
  },
}));

const Main = () => {
  const classes = useStyles();

  const { timing } = slideInUp;
  const { ref } = useWebAnimations({
    keyframes: {
      transform: "translateX(-20px)",
    },
    timing: {
      ...timing,
      delay: 500,
      direction: "reverse",
      iterations: 1,
      duration: timing.duration * 3,
      easing: "ease-in-out",
    },
  });

  return (
    <div className={classes.img}>
      <h1 className={classes.centered} ref={ref}>
        One Stop Solution to your programming needs.
      </h1>
      <Link href="#services">
        <ExpandMoreIcon className={classes.myIcon} />
      </Link>
    </div>
  );
};

export default Main;
