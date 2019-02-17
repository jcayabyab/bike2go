import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;

const Badge = styled.div`
  border-radius: 4px;
  padding: 10px 30px;
  color: white;
  font-size: 40px;
  background-color: #35ce8d;
  width: 100%;
`;

const Label = styled.div`
  color: darkgray;
  font-size: 20px;
`;

const Info = props => (
  <Wrapper>
    <Label>{props.label}</Label>
    <Badge>{props.children}</Badge>
  </Wrapper>
);

export default Info;
