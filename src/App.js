import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useAnimation, useInView } from 'framer-motion';
import { useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import ContactButton from './components/ContactButton';
import { MenuManger } from './components/MenuManger.js';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';



function App() {
  const location = useLocation();

  return (
    <RecoilRoot>
      <Header />
      <MainContainer>
        <h1>
          Bleu <br /> Blanc <br /> Studio
        </h1>
        <ContactButton />
      </MainContainer>
      </RecoilRoot>

  );
}

export default App;

const MainContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  // width: calc(100vw - 50px); 
  margin: 0 auto;
  
  h1{
    font-size: clamp(100px, 15vw, 15vw);
    font-weight: 700;
    margin-bottom: 10vh;
    max-width: 70vw;
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
    color: #111;
    line-height:100%;
  }

  margin-left: 75px;
  padding-left: 50px;
  border-left: 1px solid rgb(116,116,116);
  width: calc(100vw - 126px); 
`