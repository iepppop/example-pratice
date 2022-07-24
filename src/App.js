import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Main from './components/Main';
import { AnimatePresence, motion, useAnimation, useInView } from 'framer-motion';
import ImageExample from './components/ImageExample'
import Example from './components/Example';
import styled from 'styled-components';
import { useEffect } from 'react';
import Box from './components/Box';
const animation: MotionProps = {
  variants: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    slideStart: { clipPath: "inset(0 100% 0 0 round 8px)" },
    slideEnd: { clipPath: "inset(0 0% 0 0 round 8px)" }
  },
  initial: ["hidden", "slideStart"],
  whileInView: ["visible", "slideEnd"],
  exit: ["hidden", "slideStart"],
  viewport: {
    amount: 0.4
    // once: true
  },
  // onViewportEnter: () => console.log("enter"),
  // onViewportLeave: () => console.log("leave"),
  transition: { type: "spring", duration: 1, bounce: 0 }
};

const messageAnimation: MotionProps = {
  initial: { y: -64 },
  whileInView: { y: 0 },
  viewport: { once: true },
  transition: { type: "spring", duration: 0.5, bounce: 0 }
};

const arrowAnimation: MotionProps = {
  style: { originX: "center", originY: 0 },
  whileInView: { y: [0, 24], scale: [1, 1.4] },
  transition: {
    repeat: 5,
    // repeat: Infinity,
    repeatType: "mirror",
    duration: 1.5
  }
};

function App() {
  const location = useLocation();

  return (
    <>
        <div className="container">
      <h1>Scroll Triggered animation (whileInView)</h1>
      <div className="scroll-down__wrapper">
        <motion.div {...messageAnimation} className="scroll-down__message">
          <h2 style={{ textTransform: "uppercase" }}>Scroll down</h2>
          <motion.div {...arrowAnimation} className="scroll-down__arrow">
            &#8595;
          </motion.div>
        </motion.div>
      </div>
      <div className="motion__wrapper">
        {Array.from(Array(8).keys()).map((i) => (
          <motion.div {...animation} key={i} className="motion-box" />
        ))}
      </div>
    </div>
  </>
  );
}

export default App;

const Container = styled.div`
  width:100%;
`