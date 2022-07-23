import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Main from './components/Main';
import { AnimatePresence, motion, useAnimation, useInView } from 'framer-motion';
import ImageExample from './components/ImageExample'
import Example from './components/Example';
import styled from 'styled-components';
import { useEffect } from 'react';
import Box from './components/Box';


function App() {
  const location = useLocation();

  return (
    <>
    <motion.div style={{ height: "200vh" }}>
    <Box />
  </motion.div>
  </>
  );
}

export default App;

const Container = styled.div`
  width:100%;
`