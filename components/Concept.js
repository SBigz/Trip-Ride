import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Header from "./Header";
import NewsletterForm from "./NewsletterForm";

const PointsFortsData = [
  "Découverte des joyaux cachés du Maroc, loin des sentiers battus",
  "Engagement envers la durabilité et le respect de l'environnement",
  "Expertise locale pour une immersion authentique dans le pays",
  "Guide expérimenté pour une expérience sécurisée et enrichissante",
  "Flexibilité pour s'adapter à vos besoins et demandes spécifiques",
  "Itinéraires personnalisés adaptés à vos préférences et intérêts",
];
const LesPlusData = [
  "Personnalisation des étapes et activités selon vos préférences",
  "Hébergement varié : riads, campements, hôtels, surf houses",
  "Annulation flexible : 14 jours avant sans frais, sinon 25%",
  "Forfait 'Seasons' (4 Trips par an) : 20% de réduction",
  "Technologies avancées : Starlink, GPS",
  "Tarifs groupes dégressifs (sur devis)",
];

const concept = `Je suis Jérôme De Lucia, avec moi explorez le Maroc en 4x4 et plongez dans une aventure inoubliable ! En tant que guide passionné, je vous ferai découvrir les trésors cachés de ce pays envoûtant. Du désert mystique aux paysages époustouflants, rencontrez des habitants chaleureux et vivez leur mode de vie authentique. Réservez dès maintenant pour une expérience sur mesure, empreinte de moments magiques et de souvenirs inoubliables. Le Maroc vous attend pour une aventure hors du commun en harmonie avec la nature.`;

const CoverContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url("/Concept.webp");
  background-size: cover;
  background-position: center;
`;

const CoverText = styled.div`
  font-family: "Roxborough", sans-serif;
  font-size: 4.5vw;
  line-height: 1.5;
  color: white;
  margin: 0 40px 0 40px;
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);

@media (min-width: 768px) {
  font-size: 3vw;
}

@media (min-width: 1024px) {
  font-size: 2.5vw;
}

@media (min-width: 1440px) {
  font-size: 2vw;
}

@media (min-width: 2560px) {
  font-size: 2vw;
}

`;

const Content = styled.p`
  margin-top: 50px;
  text-align: center;
`;

const AnimatedContent = styled(({ isFading, ...rest }) => <p {...rest} />)`
  margin-top: 20px;
  text-align: center;
  transition: opacity 1s;
  opacity: ${({ isFading }) => (isFading ? "0" : "1")};
`;

export default function Concept() {
  // Utilisation du hook useState pour gérer l'indice du point fort et du plus actuel
  const [currentPointsIndex, setCurrentPointsIndex] = useState(0);
  const [currentPlusIndex, setCurrentPlusIndex] = useState(0);

  // Utilisation du hook useState pour gérer si les points et les plus sont en train de disparaître
  const [isPointsFading, setPointsIsFading] = useState(false);
  const [isPlusFading, setPlusIsFading] = useState(false);

  // Utilisation du hook useCallback pour définir la fonction de transition des points forts et les plus
  // useCallback garantit que la fonction n'est pas recréée à chaque render, ce qui pourrait causer des problèmes de performance
  const handlePointsTransition = useCallback(() => {
    // Faire disparaître le point fort actuel
    setPointsIsFading(true);
    // Après 1 seconde (le temps de l'animation), passer au point fort suivant et le faire réapparaître
    setTimeout(() => {
      setCurrentPointsIndex((prevIndex) => (prevIndex + 1) % PointsFortsData.length);
      setPointsIsFading(false);
    }, 1000);
  }, []);

  const handlePlusTransition = useCallback(() => {
    // Faire disparaître le plus actuel
    setPlusIsFading(true);
    // Après 1 seconde (le temps de l'animation), passer au plus suivant et le faire réapparaître
    setTimeout(() => {
      setCurrentPlusIndex((prevIndex) => (prevIndex + 1) % LesPlusData.length);
      setPlusIsFading(false);
    }, 1000);
  }, []);

  // Utilisation du hook useEffect pour démarrer les transitions de points forts et les plus lorsque le composant est monté
  // useEffect est utilisé ici avec un tableau de dépendances vide [], ce qui signifie qu'il ne s'exécute qu'au montage et au démontage du composant
  useEffect(() => {
    const pointsInterval = setInterval(handlePointsTransition, 6000);
    const plusInterval = setInterval(handlePlusTransition, 8000);
    // Arrêter les transitions lorsque le composant est démonté pour éviter les erreurs
    return () => {
      clearInterval(pointsInterval);
      clearInterval(plusInterval);
    };
  }, [handlePointsTransition, handlePlusTransition]);

  return (
    <CoverContainer>
      <Header />
      <CoverText>
        <Content>{concept}</Content>
        <AnimatedContent isFading={isPointsFading}>
          {PointsFortsData[currentPointsIndex]}
        </AnimatedContent>
        <AnimatedContent isFading={isPlusFading}>
          {LesPlusData[currentPlusIndex]}
        </AnimatedContent>
      </CoverText>
      <NewsletterForm />
    </CoverContainer>
  );
}
