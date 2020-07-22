import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FrontendImg from "../images/frontend.png";
import useWebAnimations, { headShake } from "@wellyshen/use-web-animations";
import Fade from "react-reveal/Fade";

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

  const { keyframes, timing } = headShake;

  const { ref } = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      delay: 500,
      direction: "alternate",
      iterations: Infinity,
      duration: timing.duration * 3,
      easing: "ease-in-out",
    },
  });

  return (
    <Fade left>
      <Grid container style={{ paddingTop: "30px" }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" align="center" className={classes.typo}>
            Responsive UI
          </Typography>
          <Typography variant="body1" className={classes.typo}>
            Bring your website into the modern age with a responsive web design
            company like Split Reef. Our top-rated responsive website design
            company can turn static websites into beautiful domains with fluid
            images and graphics that will really impress your customers and
            clients. Responsive websites can be viewed easily on any device.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={1} />
        <Grid item xs={12} sm={5}>
          <div className="target" ref={ref}>
            <img src={FrontendImg} className={classes.img} alt="" />
          </div>
        </Grid>
      </Grid>
    </Fade>
  );
};

export default ServicesUI;
