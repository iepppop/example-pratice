import styled from "styled-components";
import { useRecoilState } from 'recoil';
import { openState } from './RecoilState';

const MenuButton = () => {
    const [open, setOpen] = useRecoilState(openState);

  return (
    <MenuButtonWrap>
        <MenuBtn onClick={()=>setOpen(!open)}>
        <span />
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
`

const MenuBtn = styled.button`
    cursor: pointer;
    width: 48px;
    height: 48px;
    border: none;
    background: 0 0;
    transition: transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);

    span {
        &:after,
        &:before {
          content: "";
          width: 2px;
          height: 48px;
          position: absolute;
          background: ${({open})=> (open ? '#111' : '#fff')}
          left: 50%;
          top: 50%;
          will-change: transform;
          transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
          z-index:999;
        }
  
        &:before {
          transform: translate(-5px, -50%) scaleY(0.7) rotate(180deg);
        }
  
        &:after {
          transform: translate(5px, -50%) scaleY(0.7) rotate(0);
        }
      }
    }
  
`

