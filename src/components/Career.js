import { useAnimation, useInView, motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from 'styled-components';

const Career = () => {
    const copyMotion = {
        hidden: {
          y: 25,
          opacity: 0
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            ease: "easeInOut",
            duration: 0.6
          }
        }
      };
  return (
    <CareerWrap>
   <motion.h1 variants={copyMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}>
          First section
        </motion.h1>
        <motion.h1
          variants={copyMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          Second section
        </motion.h1>
    </CareerWrap>
  )
}
export default Career;

const CareerWrap = styled.div`
    height:100vh;
`