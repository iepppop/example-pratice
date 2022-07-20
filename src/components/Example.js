import {
    motion,
    MotionProps,
    useTransform,
    useScroll
} from "framer-motion";
import { throttle } from "throttle-debounce-ts";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const useElementViewportPosition = (ref) => {
    const [position, setPosition] = useState([0, 0]);

    useEffect(() => {
        if (!ref || !ref.current) return;

        const pageHeight = document.body.scrollHeight;
        const start = ref.current.offsetTop;
        const end = start + ref.current.offsetHeight;

        setPosition([start / pageHeight, end / pageHeight]);
    }, []);

    return { position };
}

const slideAnimation = {
    variants: {
        full: { backgroundColor: "#663399" },
        partial: { backgroundColor: "#808080" }
    },
    initial: "partial",
    whileInView: "full",
    viewport: { amount: 1, once: true }
};

const data = [

        "https://blog.kakaocdn.net/dn/cbKrt6/btrHJb6UzBc/LQis9CfyJ2rIjnNEgdl51k/img.jpg",
        "https://blog.kakaocdn.net/dn/R1nFr/btrHKnleDFp/IYhkq6AiMZu6Cjtr6xeBr1/img.jpg",
        "https://blog.kakaocdn.net/dn/czWdI4/btrHJZERus9/Yshhs3kSnfKdIvX0VsCn30/img.jpg",
        "https://blog.kakaocdn.net/dn/m9lfz/btrHKoLaW2V/5mMOhl3yjN0YcFnqgXBS9k/img.jpg",
        "https://blog.kakaocdn.net/dn/TutY5/btrHK0J3vcE/FFfLeXnQipKWFXskFYHDc1/img.jpg",
        "https://blog.kakaocdn.net/dn/cQYY4s/btrHHlipw84/niBP7QkQOQdykkqbouK1t1/img.jpg",
        "https://blog.kakaocdn.net/dn/YIlND/btrHFG7GrBR/PHKR2JkDi1KBpVKLi8C2iK/img.jpg",
        "https://blog.kakaocdn.net/dn/V7hWL/btrHJZrnmRR/3bZA01od9ajkIRv7LkGwcK/img.jpg",

];

const transition = {
    duration: 0.8,
    ease: [0.6, -0.05, 0.01, 0.9],
  }
  
  const textReveal = {
    initial: {
      y: "200%",
      opacity: 0,
    },
    animate: {
      y: "0%",
      opacity: 1,
    },
  };




const Example = () => {
    const ref = useRef(null);
    const carouselRef = useRef(null);
    const { position } = useElementViewportPosition(ref);
    const [carouselEndPosition, setCarouselEndPosition] = useState(0);
    const { scrollYProgress, scrollY } = useScroll();
    const yValue = useTransform(scrollYProgress,[0,1],[0, 100*5]);
    const x = useTransform(scrollYProgress, position, [0, carouselEndPosition]);


    useEffect(() => {
        if (!carouselRef || !carouselRef.current) return;
        const parent = carouselRef.current.parentElement;
        const scrollbarWidth =
            window.innerWidth - document.documentElement.clientWidth;

        const resetCarouselEndPosition = () => {
            if (carouselRef && carouselRef.current) {
                const newPosition =
                    carouselRef.current.clientWidth -
                    window.innerWidth +
                    scrollbarWidth +
                    ref.current.offsetLeft * 2;

                setCarouselEndPosition(-newPosition);
            }
        };

        resetCarouselEndPosition();
        const handleResize = throttle(10, resetCarouselEndPosition);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Wrapper>
            <Image>
                <motion.img
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{ ...transition, delay: 1.0 }} 
                src="https://blog.kakaocdn.net/dn/com1pb/btrHJi5C0cx/7ZPFeEVFd6PIKQM3Nkmd3K/img.jpg" />
            </Image>
            <Section>
                <motion.h1
                    variants={textReveal}
                    initial="initial"
                    animate="animate"
                    transition={transition}
                  >
                    BEYOND NEUTRAL
                </motion.h1>
                <motion.p
                   variants={textReveal}
                   initial="initial"
                   animate="animate"
                   transition={{ ...transition, delay: 0.5 }}>
                    더 나은 선택은 지구에 미치는 장기적인 영향을 고려하는 데서 비롯됩니다. 우리는 컬렉션을 넘어 기후 중립적 존재로 이끌어줄 새로운 삶의 방식에 대해 살펴봅니다. 즉, 우리가 만들어내는 것보다 더 많은 온실 가스 배
                    출량을 줄이고, 사업 전반적인 모든 영역에 더 적은 자원을 사용한다는 뜻입니다.  브랜드의 선택과 컬렉션, 그리고 우리가 더 적은 것으로 더 많은 것을 할 수 있다고 생각합니다.
                </motion.p>
                <Sub>
                    <p style={{ position: "absolute" }}>
                        Our process
                    </p>
                    <SubImg
                      
                     >
                        <motion.img
                         initial={{opacity:0}} 
                         animate={{opacity:1}} 
                         transition={{duration:1}}
                         style={{ y: yValue }}
                        src="https://blog.kakaocdn.net/dn/btZkXg/btrHJy8BjA4/g6byyyKl0RJmYv2KdWtkr1/img.jpg" />
                    </SubImg>
                </Sub>
            </Section>
            <Gallery ref={ref} style={{ marginRight: "20%" }}>
                <Container style={{ height: "300vh" }}>
                    <StickyWrapper>
                        <h1>
                            Creating our collections
                        </h1>
                        <Carousel ref={carouselRef} style={{ x, paddingLeft: "20%", paddingRight: "20%" }}>
                            {data.map((i) => (
                                <CarouselSlide
                                    {...slideAnimation}
                                    key={i}
                                >
                                    <img src={i} />
                                </CarouselSlide>
                            ))}
                        </Carousel>
                    </StickyWrapper>
                </Container>
            </Gallery>
            <Section style={{ marginBottom: "120px" }}>
                <div className="container">
                    <h2>
                        Scroll Linked animations, useViewportScroll, useTransform and custom
                        useElementViewportPosition hook
                    </h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A corrupti
                        eaque sed ex cum? Facilis animi consequatur repellendus perspiciatis
                        odio praesentium aliquam, quis ratione.
                    </p>
                    <p>
                        Velit nemo deleniti quasi quos soluta illum voluptatum laudantium,
                        dolorem excepturi vero ullam consequatur ea eius inventore iste! Qui
                        ipsam minus eius nostrum nisi aliquid laboriosam in quia praesentium
                        quaerat.
                    </p>
                </div>
            </Section>
        </Wrapper>
    )
}
export default Example;
const Wrapper = styled.div`
    position: relative;
    width:100%;
`
const Gallery = styled.div`
    position: relative;
    width:100%;
`


const Section = styled.div`
    width:60%;
    height:100%;
    margin:0px auto 0px auto;
    font-family: Pretendard; 

    h1{
        font-size:60px;
        margin:30px 0 0 0;
        letter-spacing: -1px;
        font-family: Pretendard;     
        font-weight:500;
    }

    p{
        font-size:12px;
        margin:15px 0 0 0;
        font-family: Pretendard;
        font-weight:500;
        line-height:140%;
    }
`

const Sub = styled.div`
    width:100%;
    margin:160px 0 0 0;
    display:flex;
    align-items: center;

    p{
        font-size:40px;
        left:300px;
    }
    
`

const SubImg = styled.div`
    height:400px;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    img{
        height:170%;
        position:relative;
        z-index:-1;
    }
`

const Image = styled.div`
    width:100%;
    height:400px;
    overflow: hidden;

    img{
        width:100%;
    }
`

const Container = styled.div`
    margin: 4px auto 0;
    width:100%;
`

const StickyWrapper = styled.div`
    position: sticky;
    top: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;

    h1{
        position:absolute;
        margin:0 0 0 0;
        top:180px;
        left:50%;
        transform:translate(-50%,0);
        font-family: Pretendard; 
    }
`

const Carousel = styled(motion.div)`
    display: flex;
    gap:48px;

    img{
        height:100%;
    }

`

const CarouselSlide = styled(motion.div)`
    width: 300px;
    height: 300px;
    background-color: #808080;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    overflow:hidden;

    // :nth-child(1){
    //     margin-left:10%;
    // }
`