import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import ShoesDetail from "./ShoesDetail";
import useMeasure from "react-use-measure";

const NikeCard = () => {
    // const x = useMotionValue(0);
    // const y = useMotionValue(0);
    // const rotateX = useTransform(y, [-100, 100], [30, -30]);
    // const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    const [ref, bounds] = useMeasure({ scroll: false });
    const [isHover, setIsHover] = useState(false);
    const [isPress, setIsPress] = useState(false);
    const x= useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  
    const resetMousePosition = () => {
        rotateX.set(0);
        rotateY.set(0);
    };
  
    return (
        <CardWrapper>
            <CardContainer
            
                // style={{ x, y, rotateX, rotateY, z: 100 }}
                // drag
                // dragElastic={0.16}
                // dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                // whileTap={{ cursor: "grabbing " }}
            
                ref={ref}
                initial={false}
                animate={isHover ? "hover" : "rest"}
                whileTap="press"
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.5 },
                  press: { scale: 1.4 }
                }}
                onHoverStart={() => {
                  resetMousePosition();
                  setIsHover(true);
                }}
                onHoverEnd={() => {
                  resetMousePosition();
                  setIsHover(false);
                }}
                onTapStart={() => setIsPress(true)}
                onTap={() => setIsPress(false)}
                onTapCancel={() => setIsPress(false)}
                onPointerMove={(e) => {
                    rotateX.set(e.clientX - bounds.x - bounds.width / 2);
                    rotateY.set(e.clientY - bounds.y - bounds.height / 2);
                }}
            >
                <TopContainer>
                    <CircleWrapper>
                        {/* <Circle /> */}
                    </CircleWrapper>
                    <ShoesWrapper>
                        <Shoes
                            // style={{ x, y, rotateX, rotateY }}
                            // drag
                            // dragElastic={0.12}
                            // whileTap={{ cursor: "grabbing " }}
                        >
                            <img src="https://blog.kakaocdn.net/dn/ZYqbk/btrHuUdZNIi/NSXP8xXCGXKWnHylyNCZQK/img.png" />
                        </Shoes>
                    </ShoesWrapper>
                    <NikeText>
                        <motion.img 
                        src="https://blog.kakaocdn.net/dn/bvK8TJ/btrHFQm6uuX/eg2Jgn1JXtV0Sr2VWl1yq0/img.png" 
                        isHover={isHover}
                isPress={isPress}
                rotateX={rotateX}
                rotateY={rotateY}
                        />
                    </NikeText>
                </TopContainer>
                <BottomContainer>
                    <ShoesDetail />
                </BottomContainer>
            </CardContainer>
        </CardWrapper>
    )
}
export default NikeCard;

const CardWrapper = styled.div`
    width:100%;
    perspective: 2000;
    display:flex;
    align-items: center;
    justify-content: center;
`

const CardContainer = styled(motion.div)`
    width: 255px;
    height: 360px;
    display:flex;
    flex-direction: column;
    border-radius: 25px;
    box-shadow: 10px 10px 40px rgba(132,132,132,0.1);
    background-color:rgba(255,255,255,0.9);
    cursor:grab;
    position:relative;
    border:1px solid #eee;
`

const CircleWrapper = styled.div`
    position:absolute;
    top:0;
    left:0;
    min-width: 100%;
    min-height: 100%;
    overflow:hidden;
    border-top-right-radius: 25px;
`

const Circle = styled.div`
    position: absolute;
    width: 350px;
    height:350px;
    top: -4.2em;
    right: -10em;
    z-index: 5;
    background-color: #fbbe01;
    border-radius: 50%;
`

const TopContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1.2;
    position:relative;
    align-items:center;
    justify-content: flex-end;
    padding: 1em 15px;
`

const BottomContainer = styled.div`
    display:flex;
    flex:0.8;
    padding: 0 1em;
    color:#191919;
`

const NikeText = styled.h1`
    color:#191919;
    text-transform: uppercase;
    margin:0;
    z-index: 10;
    font-size:96px;
    font-weight: 100;
    font-family: Pretendard;
    line-height:10%;
    img{
        height:200px;
        opacity:0.3;
        padding:10px 0 0 0;
    }
`

const ShoesWrapper = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Shoes = styled(motion.div)`
    width: auto;
    height: 350px;
    z-index: 99;
    user-select: none;
    padding:0 0 40px 0;

    img{
        width: auto;
        height:100%;
        user-select:none;
    }
`