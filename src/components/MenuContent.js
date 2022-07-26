import styled, { keyframes } from "styled-components";
import { openState } from './RecoilState';
import { useRecoilState } from "recoil";
import { AnimatePresence, motion } from 'framer-motion';

const internalLinks = [
    {
        url: "#1",
        component: <span>Projects</span>,
        img:
            "https://images.unsplash.com/photo-1615713170963-2595d2c721bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    },
    {
        url: "#2",
        component: <span>Recognition</span>,
        img:
            "https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2148&q=80",
    },
    {
        url: "#3",
        component: <span>Studio</span>,
        img:
            "https://images.unsplash.com/photo-1554941829-202a0b2403b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
    },
    {
        url: "#4",
        component: <span>Contribution</span>,
        img:
            "https://images.unsplash.com/photo-1593697821028-7cc59cfd7399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80",
    },
    {
        url: "/career",
        component: <span>Career</span>,
        img:
            "https://images.unsplash.com/photo-1588200618450-3a5b1d3b9aa5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
    },
];


const gridAnimation = {
    show: {
        transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    },
    hide: {
        transition: { staggerChildren: 0.2, staggerDirection: -1 }
    },
}

const imgAnimation = {
    show: {
        x: [-500, 0],
        opacity: [0, 1],
        scale: [0.95, 1],
    },
    hide: {
        x: [0, -500],
        opacity: [1, 0],
        scale: [1, 0.95],
    },
}
  

const MenuContent = () => {
    const [open, setOpen] = useRecoilState(openState);
    return (
        <AnimatePresence exitBeforeEnter>
        <MenuHolder>
            <MenuInside
                style={{
                    left: `${open ? "0px" : "-100vw"}`,
                }}
                open={open}
            >   {open && (
                <MenuNavContainer>
                        <InternalNavLink
                            open={open}
                            variants={gridAnimation}
                            animate="show"
                            exit="hide"
                            key={open}
                        >
                            {internalLinks.map((link) => (
                                <motion.li
                                    key={link.url}
                                    variants={imgAnimation}>
                                    <a href={link.url}>{link.component}</a>
                                    <img src={link.img} />
                                </motion.li>
                            ))}
                        </InternalNavLink>
                </MenuNavContainer>
                  )}
            </MenuInside>
        </MenuHolder>
        </AnimatePresence>
    )
}
export default MenuContent;

const MenuHolder = styled.div`

`

const MenuInside = styled.div`
    position: fixed;
    width:100vw;
    height:100vh;
    transform: ${props => props.open ? 'translateX(0)' : 'translateX(-100%)'}
    top:0;
    transition: left 1s cubic-bezier(1, 0, 0, 1);
    background-color: #111;
    color: white;
    z-index: 10;
`

const MenuNavContainer = styled(motion.div)`
    position: relative;
    left: 220px;
    top: 100px;
    overflow: hidden;
    width: calc(90vw - 260px);
`

const InternalNavLink = styled(motion.ul)`
    ${props => props.open && `
    @for $i from 0 through 4 {
        li:nth-child(#{$i + 1}n) {
          a {
            transition-delay: #{$i/10 + 0.8}s;
          }
        }
      }
    `}

    li{
        margin-bottom: 20px;  

        :hover{
            img{
                opacity: 1;
                transform: translateY(-50%) translateX(30px);
            }
            a{
                font-weight:600;
            }
        }
    }

    a{
          font-size: clamp(32px, 4vw, 52px);
          line-height: 1.1em;
          transform: translate(-100%);
          will-change: transform;
          transition: transform 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
          text-decoration: none;
          color:#fff;
    }

    img{
        pointer-events: none;
        aspect-ratio: 16/9;
        display: block;
        width: 30vw;
        position: absolute;
        top:50%;
        right: 10%;
        opacity:0;
        transform: translateY(-50%) translateX(-30px);
        object-fit: cover;
        transition: transform 0.5s ease-in-out;
        filter: brightness(1.3) grayscale(0.54) contrast(0.8) saturate(1.2) sepia(0.21);
    }
`