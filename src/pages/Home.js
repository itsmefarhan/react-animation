import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Services from "../components/Services";
import About from "../components/About";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Main />
      <Services />
      <About />
    </Fragment>
  );
};

export default Home;
