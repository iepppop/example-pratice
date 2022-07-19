import styled from "styled-components";

const ShoesDetail = () => {
  return (
    <DetailsContainer>
        <SmallText>attacker</SmallText>
        <SpaceHorizontalContainer>
            <MediumText>shimada genji</MediumText>
   
        </SpaceHorizontalContainer>
        {/* <SpaceHorizontalContainer>
            <MediumText>your next shoes</MediumText>
            <BuyButton>buy</BuyButton>
        </SpaceHorizontalContainer> */}
        <NikeLogo>
            <img src="https://blog.kakaocdn.net/dn/cLGKFl/btrHBzN8H5J/peG9pUjaDyUN1hD35xjkb0/img.png" />
        </NikeLogo>
    </DetailsContainer>
  )
}
export default ShoesDetail;

const DetailsContainer = styled.div`
    font-family: Pretendard;
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    padding: 2.5em 6px 0 6px;
    line-height: 0;
    position:relative;    text-align: center;
`

const MediumText = styled.span`
    font-size: 40px;
    color:#191919;
    font-weight: 300;
    text-transform: uppercase;
    font-family: "Big";
    font-style: italic;
` 

const SmallText = styled.span`
    font-size: 11px;
    color:#191919;
    font-weight: 900;
    text-transform: uppercase;    
    text-align: center;
    position:absolute;
    left:50%;
    
    transform:translate(-50%,0);
    top:65px;
    letter-spacing:0px;
`

const SpaceHorizontalContainer = styled.div`
    display: flex;
    width:100%;
    align-items: center;    
    justify-content: center;
    text-align: center;
`

const BuyButton = styled.button`
    padding: 10px 16px;
    background:#fbbe01;
    color:#000;
    text-transform: uppercase;
    font-size:16px;
    font-weight:700;
    border: 3px solid transparent;
    outline:none;
    cursor:pointer;
    transition: all 290ms ease-in-out;
    border-radius:8px;

    &:hover{
        background: transparent;
        border: 3px solid #fbbe01;
        color:#fff;
    }
`

const NikeLogo = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: end;
    justify-content:center;
    position:absolute;
    bottom:20px;

    img{
        width: auto;
        height:13px;
    }
`