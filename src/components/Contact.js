import React from "react";
import CallIcon from "@material-ui/icons/Call";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  icon: {
    fontSize: "40px",
    color: "white",
  },
  typo: {
    color: "white",
  },
  head: {
    color: "white",
    marginBottom: "20px",
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <div id="contact" style={{ paddingTop: "20px" }}>
      <Typography variant="h4" align="center" className={classes.head}>
        The Developers
      </Typography>
      <Grid container>
        <Grid xs={12} sm={2} />
        <Grid item xs={12} sm={1}>
          <CallIcon className={classes.icon} />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography variant="body1" className={classes.typo}>
            0300-0000000
          </Typography>
        </Grid>

        <Grid item xs={12} sm={1}>
          <LocationOnIcon className={classes.icon} />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography variant="body1" className={classes.typo}>
            Karachi, Pakistan
          </Typography>
        </Grid>
        <Grid item xs={12} sm={1}>
          <FacebookIcon color="primary" />
          <LinkedInIcon color="primary" />
        </Grid>
        <Grid item xs={12} sm={1}></Grid>
        <Grid xs={12} sm={2} />
      </Grid>
      <div
        style={{
          // display: "flex",
          // background: "purple",
          color: "white",
          marginTop: "20px",
          alignItems: "center",
        }}
      >
        <Typography style={{ textAlign: "center", flex: 1 }}>
          Powered by Farhan Farooq © 2020
        </Typography>
      </div>
    </div>
  );
};

export default Contact;
