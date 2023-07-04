import styled from "styled-components";

const FooterContainer = styled.div`
  font-family: "Roxborough", sans-serif;
  color: white;
  display: flex;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  padding: 5px 80px 0px 80px;
  border-radius: 20px;
  border: 2px solid black;
  justify-content: space-between;
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
  height: 7vh;

  @media (min-width: 768px) {
    height: 8vh;
  }
  
  @media (min-width: 1024px) {
    height: 9vh;
  }

  @media (min-width: 1440px) {
    height: 10vh;
  }

  @media (min-width: 2560px) {
    height: 11vh;
    border-radius: 30px;
    border: 4px solid black;
  }
`;

const RightSubtitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 30px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    width: 35px;
    height: 35px;
  }

  @media (min-width: 1440px) {
    width: 50px;
    height: 50px;
  }

  @media (min-width: 2560px) {
    width: 90px;
    height: 90px;
  }
`;

const Subitle = styled.p`
  font-size: 1.4vw;
`;

export default function Footer({}) {
  return (
    <FooterContainer>
      <RightSubtitle>
        <RightIcon src="/icons/gift.png" />
        <Subitle>5% de réduction pour les nouvelles recrues !</Subitle>
      </RightSubtitle>
    </FooterContainer>
  );
}
