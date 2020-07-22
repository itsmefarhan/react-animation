import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BackendImg from "../images/backend.png";
import useWebAnimations, { pulse } from "@wellyshen/use-web-animations";
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

  const { keyframes, timing } = pulse;

  const { ref } = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      delay: 500,
      //   direction: "reverse",
      iterations: Infinity,
      duration: timing.duration * 3,
      easing: "ease-in-out",
    },
  });

  return (
    <Grid container style={{ paddingTop: "20px" }}>
      <Grid item xs={12} sm={5}>
        <div className="target" ref={ref}>
          <img src={BackendImg} className={classes.img} />
        </div>
      </Grid>
      <Grid item xs={12} sm={1} />
      <Grid item xs={12} sm={6}>
        <Typography variant="h5" align="center" className={classes.typo}>
          JavaScript / React
        </Typography>
        <Typography variant="body1" className={classes.typo}>
          Our JavaScript programmers have good experience and knowledge in
          creating rapid solutions and applications in JavaScript supporting
          technologies & databases. Our rich expertise in different technologies
          has been generated in the course of delivering numerous JavaScript
          projects for our clients in different parts of the world.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ServicesUI;
