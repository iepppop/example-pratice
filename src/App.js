import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Main from './components/Main';
import { AnimatePresence } from 'framer-motion';
import ImageExample from './components/ImageExample'
import Example from './components/Example';
import styled from 'styled-components';

function App() {
  const location = useLocation();

  return (
    <Container>
       <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Example />} />
        </Routes>
      </AnimatePresence>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width:100%;
`