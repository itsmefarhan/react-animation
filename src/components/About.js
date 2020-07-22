import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useWebAnimations, { fadeIn } from "@wellyshen/use-web-animations";

const useStyles = makeStyles(() => ({
  head: {
    paddingTop: "20px",
    color: "white",
  },
  typo: {
    color: "white",
    width: "70%",
    margin: "auto",
    paddingTop: "30px",
  },
}));
const About = () => {
  const classes = useStyles();

  const { keyframes, timing } = fadeIn;

  const { ref } = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      direction: "alternate",
      iterations: Infinity,
      duration: timing.duration * 3,
      easing: "ease-in-out",
    },
  });

  return (
    <div id="about">
      <Typography
        variant="h3"
        align="center"
        className={classes.head}
        ref={ref}
      >
        About Us
      </Typography>
      <Typography variant="h6" className={classes.typo}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus,
        atque ab. Omnis dicta saepe officia perspiciatis expedita! Fugiat
        expedita alias laboriosam ullam reiciendis vel quae at, odio
        exercitationem reprehenderit animi. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit.
      </Typography>
      <Typography variant="h6" className={classes.typo}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus,
        atque ab. Omnis dicta saepe officia perspiciatis expedita! Fugiat
        expedita alias laboriosam ullam reiciendis vel quae at, odio
        exercitationem reprehenderit animi.
      </Typography>
      <Typography
        variant="h6"
        className={classes.typo}
        style={{ paddingBottom: "10px" }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus,
        atque ab. Omnis dicta saepe officia perspiciatis expedita!
      </Typography>
    </div>
  );
};

export default About;
