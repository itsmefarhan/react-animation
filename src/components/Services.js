import React from "react";
import { Container } from "@material-ui/core";
import ServicesUI from "./ServicesUI";
import ServicesReact from "./ServicesReact";
import ServicesFS from "./ServicesFS";

const Services = () => {
  return (
    <div
      id="services"
      style={{
        paddingBottom: "2px",
      }}
    >
      <Container>
        <ServicesUI />
        <ServicesReact />
        <ServicesFS />
      </Container>
    </div>
  );
};

export default Services;
