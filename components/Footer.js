import styled from "styled-components";

const FooterContainer = styled.div`
  font-family: "Roxborough", sans-serif;
  color: white;

  display: flex;
  flex-direction: raw;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  padding: 5px 80px 0px 80px;
  border-radius: 20px;
  border: 2px solid black;
  justify-content: space-between;

  height: 80px;
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
`;

const LeftSubtitle = styled.div`
  display: flex;
  flex-direction: raw;
  justify-content: center;
  align-items: center;
`;

const RightSubtitle = styled.div`
  display: flex;
  flex-direction: raw;
  justify-content: center;
  align-items: center;
`;

const LeftIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 30px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const RightIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 30px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const Subitle = styled.p`
  font-size: 1.4rem;
  margin-top: 20px;
`;

export default function Footer({}) {
  return (
    <FooterContainer>
      <LeftSubtitle>
        <Subitle>Suivez moi sur PolarSteps !</Subitle>
        <LeftIcon src="/icons/polarsteps-white.webp" />
      </LeftSubtitle>
      <RightSubtitle>
        <RightIcon src="/icons/gift.png" />
        <Subitle>5% de réduction pour les nouvelles recrues !</Subitle>
      </RightSubtitle>
    </FooterContainer>
  );
}
