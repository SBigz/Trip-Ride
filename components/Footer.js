import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: raw;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  padding: 5px 80px 0px 80px;
  border-radius: 20px;
  border: 2px solid black;
  justify-content: space-between;
  position: absolute;
  bottom: -100px;
  left: 20px;
  width: calc(100% - 40px);
  height: 80px;
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
`;

const LeftIcon = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 320px;
  bottom: 18px;
  margin-left: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const RightIcon = styled.img`
    width: 40px;
    height: 40px;
    position: absolute;
    right: 455px;
    bottom: 18px;
    margin-right: 10px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
`;


const Subitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;

export default function Footer({}) {
  return (
    <FooterContainer>
      <Subitle>Suivez moi sur PolarSteps !</Subitle>
      <LeftIcon src="/icons/polarsteps-white.webp" />
      <RightIcon src="/icons/gift.png" />
      <Subitle>5% de réduction pour les nouvelles recrues !</Subitle>
    </FooterContainer>
  );
}
