import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FullstackImg from "../images/fullstack.png";
import useWebAnimations, { bounce } from "@wellyshen/use-web-animations";

const useStyles = makeStyles(() => ({
  img: {
    width: "100%",
    height: "300px",
  },
  typo: {
    marginTop: "20px",
  },
}));

const ServicesUI = () => {
  const classes = useStyles();

  const { keyframes, timing } = bounce;

  const { ref } = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      delay: 500,
      iterations: Infinity,
      duration: timing.duration * 3,
      easing: "ease-in-out",
    },
  });

  return (
    <Grid container style={{ paddingTop: "20px" }}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h5" align="center" className={classes.typo}>
          Fullstack Development
        </Typography>
        <Typography variant="body1" className={classes.typo}>
          Our teams of full-stack developers master the full package. They
          immediately identify the client and server-side requirements of a
          digital product, analyze the pros and cons of various technical
          options and implement the solution that best fits your business
          strategy.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={1} />
      <Grid item xs={12} sm={5}>
        <div className="target" ref={ref}>
          <img src={FullstackImg} className={classes.img} alt="" />
        </div>
      </Grid>
    </Grid>
  );
};

export default ServicesUI;
