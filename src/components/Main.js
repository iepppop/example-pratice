import styled from "styled-components";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Main = ({ imageDetails }) => {
    return (
        <Contain>
            <Text>
                <motion.h1
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                >
                    PLANTS.
                </motion.h1>
                <ImageWrap style={{
                    width: imageDetails.width,
                    height: imageDetails.height,
                }}
                    exit={{
                        y: "50%",
                        width:"100%",
                        height:"500px"
                    }}
                    animate={{
                        transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
                    }}
                >
                    <Link to={`/plants`}>
                        <motion.img
                            alt='Yasmeen Tariq'
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                            src="https://blog.kakaocdn.net/dn/bqVCrM/btrHvo5tJpA/XddQD5w6SCo62yBFnBRkcK/img.jpg" />
                    </Link>
                </ImageWrap>
            </Text>
        </Contain>
    )
}
export default Main;

const Contain = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Text = styled(motion.div)`
    color:#202020;

    h1{
        font-size:110px;  
        font-weight:400;
    }
`

const ImageWrap = styled(motion.div)`
    overflow:hidden;
    img{
        width: 100%;
    }
`