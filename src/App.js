import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Main from './components/Main';
import { AnimatePresence, motion, useAnimation, useInView } from 'framer-motion';
import ImageExample from './components/ImageExample'
import Example from './components/Example';
import styled from 'styled-components';
import { useEffect } from 'react';

function FadeInWhenVisible({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
    >
      {children}
    </motion.div>
  );
}

function Box() {
  return (
    <div
      style={{
        padding: 40,
        background: "white",
        display: "inline-block",
        borderRadius: 5
      }}
    />
  );
}

function App() {
  const location = useLocation();

  

  return (
    <Container>
            <FadeInWhenVisible>
        <Box />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Box />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Box />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Box />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Box />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Box />
      </FadeInWhenVisible>
       {/* <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Box />} />
        </Routes>
      </AnimatePresence> */}
    </Container>
  );
}

export default App;

const Container = styled.div`
  width:100%;
`