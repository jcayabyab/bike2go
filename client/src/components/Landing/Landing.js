import React from "react";
import styled from "styled-components";
import img from "./biking.jpg";
import { Col } from "reactstrap";

const Row = styled.div`
  display: flex;
  color: white;
  padding: 10px;
`

const Img = styled.img`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin: 10px;
`;

const Landing = () => (
  <Row style={{backgroundColor: "#15ae6d"}}>
    <Col md={5}>
      <p>
        Bike2Go is a service that lets you ride, wherever, whenever you want.
        Make an account to get access to bike racks all over the world.
      </p>
    </Col>
    <Col md={7}>
      <Img src={img} alt="Two happy minorities ride a bike" width="600px" />
      <p>
        <i>
          Created by Armaan Mohar, Avneet Gill, Jofred Cayabyab, Kelvin Tran,
          Shamin Rahman.
        </i>
      </p>
    </Col>
  </Row>
);

export default Landing;
