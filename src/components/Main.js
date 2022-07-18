import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Main = ({ imageDetails }) => {
  return (
    <Container>
    <Contain>
      <ImgWrap
      >
        <Img
          style={{
            width: imageDetails.width,
            height: imageDetails.height,
          }}>
          <Link to={`/plants`}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              src="https://blog.kakaocdn.net/dn/SM81V/btrHqQXbaRp/U0q3HKRKS6Nk5zUSDOsObk/img.jpg"
              transition={transition}
              exit={{ scale: 1.0 }}
            />
          </Link>
        </Img>
      </ImgWrap>
      <Text
        style={{
          width: imageDetails.width,
        }}>
        plants
      </Text>
    </Contain>
    </Container>
  );
};
export default Main;

const Container = styled.div`
  width:100%;
  height: auto;
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
`

const Contain = styled.div`
  width:100%;
  height:100vh;
`

const ImgWrap = styled.div`
  width:100%;
  height:80vh;
  display:flex;
  align-items:end;
  justify-content:center;
`

const Img = styled.div`
  overflow:hidden;
  img{
    width: 100%;
  }
`

const Text = styled.div`
  height:20vh;
  margin:0 auto;
  font-size:30px;
  padding:15px 0 0 0;

  font-weight:900;
`




