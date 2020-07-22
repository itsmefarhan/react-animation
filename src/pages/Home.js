import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Main />
      <Services />
      <About />
      <Contact />
    </Fragment>
  );
};

export default Home;
