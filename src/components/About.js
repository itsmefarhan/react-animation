import React from "react";
import { Typography, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useWebAnimations, { fadeIn } from "@wellyshen/use-web-animations";
import AboutImg from "../images/about.jpg";
import { Fade } from "react-reveal";
const useStyles = makeStyles(() => ({
  head: {
    paddingTop: "20px",
    color: "white",
  },
  typo: {
    color: "white",
    paddingTop: "30px",
  },
  img: {
    width: "100%",
    height: "450px",
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
      <Fade bottom>
        <Typography
          variant="h3"
          align="center"
          className={classes.head}
          ref={ref}
        >
          About Us
        </Typography>
        <Container>
          <Grid container>
            <Grid item xs={12} sm={1} />
            <Grid item xs={12} sm={5}>
              <img src={AboutImg} alt="" className={classes.img} />
            </Grid>
            <Grid item xs={12} sm={1} />

            <Grid item xs={12} sm={4}>
              <Typography variant="h6" className={classes.typo}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, atque ab. Omnis dicta saepe officia perspiciatis
                expedita! Fugiat expedita alias laboriosam ullam reiciendis vel
                quae at, odio exercitationem reprehenderit animi. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit.
              </Typography>
              <Typography
                variant="h6"
                className={classes.typo}
                style={{ paddingBottom: "10px" }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, atque ab. Omnis dicta saepe officia perspiciatis
                expedita! Fugiat expedita alias laboriosam ullam reiciendis vel
                quae at, odio exercitationem reprehenderit animi.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Fade>
    </div>
  );
};

export default About;
