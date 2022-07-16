import { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import styled from "styled-components";


const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Sub = ({ imageDetails }) => {
    const { scrollYProgress } = useViewportScroll();
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
        <Contain>
            <Text>
                <TextWrap>
                    <motion.h1
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                    >
                        Natural
                    </motion.h1>
                </TextWrap>
                <ImageContainerSingle
                    initial={{
                        y: "50%",
                    }}
                    animate={{
                        transition: { delay: 0.2, ...transition },
                    }}
                >
                    <ImageWrap
                        style={{
                            width: "100%",
                            height:"500px"
                        }}
                        initial={{
                        
                            height:"500px"
                        }}
                        // animate={{
                        //     y: 0,
                        //     width: "100%",
                        //     height: window.innerWidth > 1440 ? 800 : 400,
                        //     transition: { delay: 0.2, ...transition },
                        // }}
                    >
                        <motion.img
                            alt='Yasmeen Tariq'
                            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                            src="https://blog.kakaocdn.net/dn/bqVCrM/btrHvo5tJpA/XddQD5w6SCo62yBFnBRkcK/img.jpg"
                            style={{ scale: scale }}
                            initial={{ scale: 1.0 }}
                            animate={{
                                transition: { delay: 0.2, ...transition },
                            }}
                        />
                    </ImageWrap>
                    dsf
                </ImageContainerSingle>
            </Text>
        </Contain>
    )
}
export default Sub;

const Contain = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;

`

const Text = styled.div`
    color:#202020;

    h1{
        font-size:110px;  
        font-weight:400;
    }
`

const TextWrap = styled.div`
    text-align:center;
`

const ImageWrap = styled(motion.div)`
   
    
    img{
        width: 100%;
    }
`

const ImageContainerSingle = styled(motion.div)`
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
`