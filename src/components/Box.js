import React, { useRef } from "react";
import styled from 'styled-components';
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Box = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  return (
    <Text className="text" style={{ scale }}>
    Hi!
  </Text>
  );
};
export default Box;

const Text = styled(motion.div)`
position: fixed;
top: 50%;
left: 50%;
`