import { useAnimation, motion } from "framer-motion";
import styled from 'styled-components';

const ImageExample = () => {
    const imgAnimation = useAnimation()

    const handleMouseMove = e => {
        const { clientX, clientY } = e
        const moveX = clientX - window.innerWidth / 2
        const moveY = clientY - window.innerHeight / 2
        const offsetFactor = 15
        imgAnimation.start({
            x: moveX / offsetFactor,
            y: moveY / offsetFactor
        })
    }

    return (
        <Container
        animate={imgAnimation}
                onMouseMove={e => handleMouseMove(e)}>
            <motion.img
                
                src="https://blog.kakaocdn.net/dn/o8g5r/btrHAHyZCdF/pgKpstrQpIn0b4FfswDWu0/img.jpg" />
        </Container>
    )
}
export default ImageExample;

const Container = styled(motion.div)`
    width:100%;
    height: 100vh;
    display:flex;
    align-items: center;
    justify-content: center;
    perspective: 2000;

    img{
        width:400px;
        cursor: pointer;
    }
`