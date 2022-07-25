import styled from "styled-components";
import { useRecoilState } from 'recoil';
import { openState } from './RecoilState';

  

const MenuButton = () => {
    const [open, setOpen] = useRecoilState(openState);
    return (
        <MenuButtonWrap open={open}>
            <MenuBtn onClick={() => setOpen(!open)}>
                <SpanBtn open={open} />
            </MenuBtn>
        </MenuButtonWrap>
    )
}
export default MenuButton;

const MenuButtonWrap = styled.div`
    position:fixed;
    left:11px;
    top:100px;
    z-index: 11;
    will-change: transform;
    transition: transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
    transform : ${props => (props.open ? 'translateX(80px)' : 'translateX(0)')};
    transition-delay: 0.2s;
`

const MenuButtonWrapClick = styled.div`
    position:fixed;
    left:11px;
    top:100px;
    z-index: 11;
    will-change: transform;
    transition: transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
    transform: translateX(80px);
    transition-delay: 0.2s;
`


const MenuBtn = styled.button`
    cursor: pointer;
    width: 48px;
    height: 48px;
    border: none;
    background: 0 0;
    will-change: transform;
    transition: transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
`

const SpanBtn = styled.span`
    &:after,
    &:before {
    content: "";
    width: 2px;
    height: 48px;
    position: absolute;
    left: 50%;
    top: 50%;
    will-change: transform;
    transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
    z-index:999;
    background-color: ${props => (props.open ? '#fff' : '#111')};
    }

    &:before {
        transform: ${props => (props.open ? 'translate(-50%, -50%) rotate(315deg)' : 'translate(-5px, -50%) scaleY(0.7) rotate(180deg)')};
    }

    &:after {
        transform: ${props => (props.open ? 'translate(-50%, -50%) rotate(45deg)' : 'translate(5px, -50%) scaleY(0.7) rotate(0);')};
    }
`

