import Menu from './Menu';
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrap>
        <BrandDescription>
        Digital experience design studio
        </BrandDescription>
        <Menu />
        </HeaderWrap>
  )
}
export default Header;

const HeaderWrap = styled.div`
    width:100vw;
    position:relative;
`
const BrandDescription = styled.div`
    position: fixed;
    z-index: 11;
    top: 100px;
    right: 10vw;
    max-width: 120px;
    transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-delay: 0.5s;
    color: #111;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 12px;
    text-align: right;
`