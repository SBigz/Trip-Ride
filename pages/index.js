import HeaderCover from "../components/HeaderCover";
import Concept from "../components/Concept";
import Cover from "../components/Cover";
import ContactInfo from "../components/ContactInfo";
import ReactFullpage from "@fullpage/react-fullpage";
import styled from "styled-components";

// Remove Fullpage.js watermark
const Container = styled.div`
  .fp-watermark {
    display: none;
  }
`;

export default function Index() {
  const subtitles = [
    {
      title: "Mer",
      subtitle:
        "Vivez une aventure océanique incomparable sur les côtes étincelantes du Maroc. Montez sur votre planche de surf et laissez l'écume des vagues atlantiques vous porter dans un ballet aquatique éblouissant. Découvrez les trésors cachés du monde sous-marin en plongée ou en pêche, car chaque sortie est une occasion de se laisser surprendre par la beauté de la nature. En soirée, détendez-vous dans votre campement cosy et laissez le doux murmure des vagues vous bercer. Profitez d'un ciel étoilé époustouflant, là où l'horizon se confond avec la mer. Une expérience de bord de mer au Maroc n'est pas qu'un simple voyage, c'est une histoire qui se raconte au fil de l'eau, une aventure qui imprègne votre âme.",
      cardTitle: "Ocean Tour",
      activities: [
        "Cours de surf avec des instructeurs expérimentés",
        "Exploration en plongée des fonds marins",
        "Excursion en bateau pour observer les dauphins",
        "Pêche en haute mer avec des guides locaux",
        "Séance de yoga sur la plage au lever du soleil",
      ],
      price: "1,00 €",
    },
    {
      title: "Montagnes",
      subtitle:
        "Embarquez pour une aventure époustouflante dans l'écrin vert des montagnes marocaines. Que vous soyez un randonneur passionné ou un novice, chaque sentier dévoile une surprise, chaque cime offre une perspective nouvelle. Au cœur de cette nature verdoyante, le temps s'arrête et vous fait vivre une expérience inoubliable. Nuit après nuit, votre campement niché dans les montagnes vous offre un refuge pittoresque. Éveillez vos sens avec la fraîcheur de l'air montagnard, le crépitement du feu de camp, le chant mélodieux des oiseaux. Une escapade en montagne au Maroc, c'est bien plus qu'un simple voyage. C'est une communion avec la nature, un éveil des sens, une aventure gravée dans la pierre.",
      cardTitle: "Mountains Tour",
      activities: [
        "Randonnée guidée vers les sommets les plus spectaculaires",
        "Découverte de villages traditionnels berbères",
        "Nuitée en bivouac au cœur des montagnes",
        "Observation de la faune et de la flore locales",
        "Séance de méditation au lever du soleil",
      ],
      price: "1,00 €",
    },
    {
      title: "Urbain",
      subtitle:
        "Imprégnez-vous de l'essence authentique des villes marocaines, là où l'ancien côtoie le moderne. Laissez-vous séduire par le charme de nos quartiers historiques, explorez les ruelles sinueuses, dénichez des trésors dans les soukhs vibrant de couleurs et de vie. En soirée, reposez-vous dans nos hôtels de luxe, véritables havres de paix et de confort. C'est un voyage à travers le temps, un ballet incessant de couleurs, de sons et de saveurs. Découvrez le Maroc urbain, c'est embrasser une aventure hors du commun, une histoire qui se déroule à chaque coin de rue.",
      cardTitle: "Urban Tour",
      activities: [
        "Visite guidée des quartiers historiques",
        "Exploration des souks animés",
        "Dégustation de spécialités culinaires locales",
        "Découverte de l'architecture unique",
        "Spectacle de musique traditionnelle",
      ],
      price: "1,00 €",
    },
    {
      title: "Desert Tour",
      subtitle:
        "Entrez dans le cœur battant du Maroc en partant pour une aventure dans le désert. Laissez-vous envoûter par les dunes dorées, infinies et changeantes, parcourues en 4x4 ou à dos de dromadaire. Découvrez les oasis luxuriantes, véritables miracles de la nature, nichés au cœur de cette immensité. Chaque soir, admirez le coucher de soleil qui embrase le ciel, puis laissez la voûte céleste vous envelopper de sa beauté lors de nuits à la belle étoile. Un séjour dans le désert marocain, c'est plus qu'un voyage. C'est un rendez-vous avec l'infini, une aventure qui marque les esprits, une épopée inscrite dans le sable.",
      cardTitle: "Package Desert",
      activities: [
        "Excursion en 4x4 dans les dunes",
        "Balade à dos de dromadaire au coucher du soleil",
        "Visite d'une oasis luxuriante",
        "Observation des étoiles lors d'une nuit à la belle étoile",
        "Rencontre avec des nomades locaux",
      ],
      price: "1,00 €",
    },
  ];

  return (
    <ReactFullpage
      // Fullpage options
      navigation={true}
      anchors={[
        "headerCover",
        "coverConcept",
        "coverMer",
        "coverMountains",
        "coverUrbain",
        "coverDesert",
        "contactInfo",
      ]}
      render={({ state, fullpageApi }) => {
        return (
          <Container id="fullpage-wrapper">
            <div className="section">
              <HeaderCover
                leftTitle="Trip & Ride"
                leftSubtitle="4x4 Travel Tours"
                littleSubtitle="Guide d'exploration au Maroc"
              />
            </div>
            <div className="section">
              <Concept />
            </div>
            <div className="section">
              <Cover
                title="Mer"
                subtitle={[subtitles[0].subtitle]}
                cardTitle={subtitles[0].cardTitle}
                activities={subtitles[0].activities}
                price={subtitles[0].price}
                imagepath="Surf.webp"
                badgePath="/icons/mer.png"
                product={{ id: "price_1NKhyjAifrYffvQMQ26m0JyN" }}
              ></Cover>
            </div>
            <div className="section">
              <Cover
                textposition="right"
                title="Montagnes"
                subtitle={[subtitles[1].subtitle]}
                cardTitle={subtitles[1].cardTitle}
                activities={subtitles[1].activities}
                price={subtitles[1].price}
                imagepath="Mountains.webp"
                badgePath="/icons/montagnes.png"
                product={{ id: "price_1NKhz3AifrYffvQMdvW2FXxJ" }}
              />
            </div>
            <div className="section">
              <Cover
                title="Urbain"
                subtitle={[subtitles[2].subtitle]}
                cardTitle={subtitles[2].cardTitle}
                activities={subtitles[2].activities}
                price={subtitles[2].price}
                imagepath="Streets.webp"
                badgePath="/icons/morocco.png"
                product={{ id: "price_1NKhzSAifrYffvQMTPqalKd2" }}
              />
            </div>
            <div className="section">
              <Cover
                textposition="right"
                title="Desert"
                subtitle={[subtitles[3].subtitle]}
                cardTitle={subtitles[3].cardTitle}
                activities={subtitles[3].activities}
                price={subtitles[3].price}
                imagepath="DesertNight.webp"
                badgePath="/icons/desert.png"
                product={{ id: "price_1NKi01AifrYffvQMK6gWxPXq" }}
              />
            </div>
            <div className="section">
              <ContactInfo />
            </div>
          </Container>
        );
      }}
    />
  );
}
