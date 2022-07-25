import styled from "styled-components";
import { Plus } from "react-feather";

const ContactButton = () => {
  return (
    <ContactWrap>
        <span>
            Contact us
        </span><Plus />
     </ContactWrap>
  )
}
export default ContactButton;

const ContactWrap = styled.button`
    border: 1px solid #111;
    padding: 20px;
    background: #111;
    position: absolute;
    bottom: 10vh;
    right: 10vw;
    text-transform: uppercase;
    color: white;
    transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    letter-spacing: 3px;

    display: flex;
    align-items: center;
    justify-content: center;

    span {
    margin-right: 10px;
    }
`