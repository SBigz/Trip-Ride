import styled from "styled-components";
import Footer from "./Footer";

const argumentsDataLeft = [
  "Découverte des joyaux cachés du Maroc, loin des sentiers battus",
  "Engagement envers la durabilité et le respect de l'environnement",
  "Expertise locale pour une immersion authentique dans le pays",
  "Guide expérimenté pour une expérience sécurisée et enrichissante",
  "Flexibilité pour s'adapter à vos besoins et demandes spécifiques",
  "Itinéraires personnalisés adaptés à vos préférences et intérêts",
];
const argumentsDataRight = [
  "Personnalisation des étapes et activités selon vos préférences",
  "Hébergement varié : riads, campements, hôtels, surf houses",
  "Annulation flexible : 14 jours avant sans frais, sinon 25%",
  "Forfait 'Seasons' (4 Trips par an) : 20% de réduction",
  "Technologies avancées : Starlink, GPS",
  "Tarifs groupes dégressifs (sur devis)",
];

const concept = `Je suis Jérôme De Lucia, avec moi explorez le Maroc en 4x4 et plongez dans une aventure inoubliable ! En tant que guide passionné, je vous ferai découvrir les trésors cachés de ce pays envoûtant. Du désert mystique aux paysages époustouflants, rencontrez des habitants chaleureux et vivez leur mode de vie authentique. Réservez dès maintenant pour une expérience sur mesure, empreinte de moments magiques et de souvenirs inoubliables. Le Maroc vous attend pour une aventure hors du commun en harmonie avec la nature.`;

const CoverContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url("/Concept.webp");
  background-size: cover;
  background-position: center;
`;

const CoverText = styled.div`
  font-family: "Roxborough", sans-serif;
  font-size: 1.2rem;
  position: absolute;
  top: 10px;
  right: 50px;
  left: 50px;
  color: white;
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: raw;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  display: flex;
  flex-direction: raw;
  justify-content: center;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  cursor: pointer;
  margin: 0 20px 0 20px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const Content = styled.p`
  font-size: 1.3rem;
  line-height: 1.5;
  margin-top: 50px;
  text-align: center;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: raw;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

const LeftList = styled.ul`
  list-style: circle;
  font-size: 1.2rem;
  line-height: 1.5;
  padding: 0;
  margin: 0 0 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
`;

const LeftListItem = styled.li`
  margin-bottom: 10px;
`;

const RightList = styled.ul`
  list-style: none;
  font-size: 1.2rem;
  line-height: 1.5;
  padding: 0;
  margin: 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: right;
`;

const RightListItem = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-right: 20px;

  &::before {
    content: "•";
    position: absolute;
    right: 0;
    
  }
`;

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 45px;
  width: 95vw;
  margin-bottom: 20px;
`;

export default function Concept() {
  const argumentsRight = argumentsDataRight.map((argument, index) => (
    <RightListItem key={index}>{argument}</RightListItem>
  ));
  const argumentsLeft = argumentsDataLeft.map((argument, index) => (
    <LeftListItem key={index}>{argument}</LeftListItem>
  ));

  return (
    <CoverContainer>
      <CoverText>
        <TitleContainer>
          <Title>Trip</Title>
          <Logo src="/logo.png" alt="Logo"></Logo>
          <Title>Ride</Title>
        </TitleContainer>
        <Content>{concept}</Content>
        <ListContainer>
          <LeftList>{argumentsLeft}</LeftList>
          <RightList>{argumentsRight}</RightList>
        </ListContainer>
      </CoverText>
        <FooterContainer>
          <Footer />
        </FooterContainer>
    </CoverContainer>
  );
}
