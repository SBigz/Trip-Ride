import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import NewsletterForm from "./NewsletterForm";

const CoverContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const AnimatedBackground = styled(
  ({ currentimage, nextimage, isFading, ...props }) => <div {...props} />
)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: -1;
  transition: opacity 1s ease-in-out, background-image 2s ease-in-out,
    transform 7s linear;

  background-image: url(${({ currentimage }) => currentimage});
  opacity: 1;
  transform: translateX(-10);

  &.fade-in {
    background-image: url(${({ nextimage }) => nextimage});
    opacity: 1;
  }
`;

const BlurContainer = styled.div`
  filter: blur(3px);
`;

const CoverTextRight = styled(({ isFading, ...props }) => <div {...props} />)`
  font-family: "Roxborough", sans-serif;
  font-size: 3vw;
  text-align: right;
  position: absolute;
  bottom: 180px;
  right: ${({ isFading }) => (isFading ? "-1000px" : "20px")};
  color: rgba(255, 255, 255, 0.9);
  transition: right 1s ease-in-out;
`;

const CoverTextLeft = styled.div`
  font-family: "Roxborough", sans-serif;
  font-size: 6vw;
  position: absolute;
  bottom: 12vh;
  left: 5vw;
  color: white;
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);

  @media (min-width: 768px) {
    left: 4.2vw;
    bottom: 8vh;
  }

  @media (min-width: 1024px) {
    left: 3.7vw;
    bottom: 8vh;
  }

  @media (min-width: 1440px) {
    left: 2.7vw;
    bottom: 8vh;
  }

  @media (min-width: 2560px) {
    left: 1.7vw;
    bottom: 8vh;
  }
`;

const imagesAndTexts = [
  { img: "/Cover1.webp", title: "Ruines de Mokhtar" },
  { img: "/Cover2.webp", title: "Souk de Djerba" },
  { img: "/Cover3.webp", title: "L'impériale" },
  { img: "/Cover4.webp", title: "Oliwud" },
  { img: "/Cover5.webp", title: "Secret Spot" },
  { img: "/Cover6.webp", title: "Azure" },
  { img: "/Cover7.webp", title: "Dune de Tataouine" },
  { img: "/Cover8.webp", title: "Secret Spot" },
];

const SubtitleContainer = styled.div`
  display: flex;
  align-items: center;
  height: 7vh;

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 40px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 60px;
  }

  @media (min-width: 2560px) {
    margin-bottom: 100px;
  }
`;

const Icon = styled.img`
  width: 35px;
  height: 35px;
  align-self: center;
  margin-right: 20px;
  margin-left: 5px;

  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    width: 45px;
    height: 45px;
  }

  @media (min-width: 1440px) {
    width: 60px;
    height: 60px;
  }

  @media (min-width: 2560px) {
    width: 100px;
    height: 100px;
  }
`;

export default function HeaderCover({ leftSubtitle, littleSubtitle }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const currentItem = imagesAndTexts[currentIndex];
  const nextItem = imagesAndTexts[(currentIndex + 1) % imagesAndTexts.length];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % imagesAndTexts.length);
        setIsFading(false);
      }, 1000);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <CoverContainer>
        <Header />
        <AnimatedBackground
          currentimage={currentItem.img}
          nextimage={nextItem.img}
          isFading={isFading}
        />
        <CoverTextRight isFading={isFading}>
          <BlurContainer>
            <h1>{currentItem.title}</h1>
          </BlurContainer>
        </CoverTextRight>
        <CoverTextLeft>
          <SubtitleContainer>
            <Icon src="/icons/4x4.png" />
            <h5>{leftSubtitle}</h5>
          </SubtitleContainer>
          <SubtitleContainer>
            <Icon src="/icons/guide-de-voyage.png" />
            <h5>{littleSubtitle}</h5>
          </SubtitleContainer>
        </CoverTextLeft>
          <NewsletterForm />
      </CoverContainer>
    </>
  );
}
