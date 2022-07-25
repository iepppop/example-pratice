import MenuButton from "./MenuButton";
import MenuContent from "./MenuContent";
import styled from "styled-components";

const Menu = () => {
  return (
    <MenuWrapper>
        <MenuButton />
        <MenuContent />
    </MenuWrapper>
  )
}
export default Menu;

const MenuWrapper = styled.div`
`