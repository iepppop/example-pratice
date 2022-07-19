import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import NikeCard from "./NikeCard";


const Main = () => {
  return (
    <Container>
      <NikeCard />

    </Container>
  );
};
export default Main;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display:flex;
  align-items: center;
  justify-content: center;
  position:relative;
  overflow:hidden;
`
const Circle = styled.div`
  width:500px;
  height:500px;
  position:absolute;
  background:#d8dd0e;
  border-radius:50%;
  filter:blur(50px);
  opacity:0.4;
  right:-100px;
  top:-80px;
  z-index:-1;
`

const Circle2 = styled.div`
  width:400px;
  height:400px;
  position:absolute;
  background:#ff9c00;
  border-radius:50%;
  filter:blur(50px);
  opacity:0.6;
  right:-30px;
  top:-50px;
  z-index:-1;

`



