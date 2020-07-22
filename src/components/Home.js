import React, { Fragment } from "react";
import { Container } from "@material-ui/core";
import Navbar from "./Navbar";
import Main from "./Main";
import Services from "./Services";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Main />
        <Services />
      <Container>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem soluta
          modi placeat sed temporibus recusandae aliquid deserunt itaque? Quo
          voluptatibus tempora repellendus omnis, fugit soluta itaque rerum a
          eaque dolorem!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem soluta
          modi placeat sed temporibus recusandae aliquid deserunt itaque? Quo
          voluptatibus tempora repellendus omnis, fugit soluta itaque rerum a
          eaque dolorem!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem soluta
          modi placeat sed temporibus recusandae aliquid deserunt itaque? Quo
          voluptatibus tempora repellendus omnis, fugit soluta itaque rerum a
          eaque dolorem!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem soluta
          modi placeat sed temporibus recusandae aliquid deserunt itaque? Quo
          voluptatibus tempora repellendus omnis, fugit soluta itaque rerum a
          eaque dolorem!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem soluta
          modi placeat sed temporibus recusandae aliquid deserunt itaque? Quo
          voluptatibus tempora repellendus omnis, fugit soluta itaque rerum a
          eaque dolorem!
        </div>
      </Container>
    </Fragment>
  );
};

export default Home;
