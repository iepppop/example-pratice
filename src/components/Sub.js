import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";


const transition = { duration: 0.5, ease: [0.6, 0.01, 0.3, 0.9] };

const firstName = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  };

const letter = { 
    initial: {
        opacity:0,
        y: 20,
      },
      animate: {
        opacity:1,
        y: 0,
        transition: { duration: 1, ...transition},
      },
}


const Sub = ({ imageDetails }) => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

    const [canScroll, setCanScroll] = useState(false);

    useEffect(() => {
        if (canScroll === false) {
            document.querySelector("body").classList.add("no-scroll");
        } else {
            document.querySelector("body").classList.remove("no-scroll");
        }
    }, [canScroll]);

    return (
        <Container
            onAnimationComplete={() => setCanScroll(true)}
            initial='initial'
            animate='animate'
            exit='exit'
        >
            <Contain>
                <Text variants={firstName}>
                    <motion.h1 variants={letter}>p</motion.h1>
                    <motion.h1 variants={letter}>l</motion.h1>
                    <motion.h1 variants={letter}>a</motion.h1>
                    <motion.h1 variants={letter}>n</motion.h1>
                    <motion.h1 variants={letter}>t</motion.h1>
                    <motion.h1 variants={letter}>s</motion.h1>
                    <span></span>
                </Text>
                <ImgWrap
                    initial={{
                        y: 0,
                    }}
                    animate={{
                        y: '32%',
                    }}
                    transition={transition}
                >
                    <Img
                        style={{
                            width: imageDetails.width,
                            height: imageDetails.height,
                            scale: scale,
                        }}
                        animate={{
                            width: "100%",
                        }}
                        transition={{ ...transition, delay: 0.5 }}
                    >
                        <motion.img
                            src="https://blog.kakaocdn.net/dn/SM81V/btrHqQXbaRp/U0q3HKRKS6Nk5zUSDOsObk/img.jpg"
                        />
                    </Img>
                </ImgWrap>
            </Contain>
            <Explain>
            Land plants are multicellular organisms that can be distinguished from other living things by a number of characteristics: They make their own food. Plants are photosynthetic and contain a green pigment called chlorophyll, which enables plants to convert energy from the sun into food. Plants store their food as starch.
            </Explain>
        </Container>
    )
}
export default Sub;

const Container = styled(motion.div)`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;
    position:relative;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
`

const Contain = styled.div`
  height:100vh;
`

const ImgWrap = styled(motion.div)`
  width:100%;
  height:80vh;
  display:flex;
  align-items:first;
  justify-content:center;
  overflow:hidden;
`

const Img = styled(motion.div)`
  overflow:hidden;
  img{
    width: 100%;
  }
`

const Text = styled(motion.div)`
  height:20vh;
  margin:0 auto;
  font-size:30px;
  padding:30px 0 0 50px;
  font-size:60px;
  display:flex;
  align-items:first;

  h1{
    font-size:42px;
  }

  span{
    font-size:15px;
    padding:20px 0 10px 30px;
    font-weight:300;
  }
`

const Explain = styled.div`
  font-size:12px;
  position:absolute;
  top:115%;
  padding:0 30px;
`
