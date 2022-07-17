import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const Main = ({ imageDetails }) => {
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
        <motion.h1
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          PLANTS.
        </motion.h1>
        <ImageWrap
          style={{
            width: imageDetails.width,
            height: imageDetails.height,
          }}
          exit={{
            y: "50%",
            width: "100%",
            height: "500px",
          }}
          transition={{
            duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]
          }}
        >
          <Link to={`/plants`}>
            <motion.img
              alt="Yasmeen Tariq"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
              src="https://blog.kakaocdn.net/dn/bqVCrM/btrHvo5tJpA/XddQD5w6SCo62yBFnBRkcK/img.jpg"
            />
          </Link>
        </ImageWrap>
      </Text>
    </Contain>
  );
};
export default Main;

const Contain = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled(motion.div)`
  color: #202020;

  h1 {
    font-size: 110px;
    font-weight: 400;
  }
`;

const ImageWrap = styled(motion.div)`
  overflow: hidden;
  img {
    width: 100%;
  }
`;
