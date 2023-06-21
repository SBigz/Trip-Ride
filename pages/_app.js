import { useEffect } from "react";
import "../styles/globals.css";
import "../public/fonts/fonts.css";
import Head from "next/head";

function App({ Component, pageProps }) {
  const imagesToPreload = [
    "icons/mer.png",
    "icons/montagnes.png",
    "icons/morocco.png",
    "icons/desert.png",
    "icons/4x4.png",
    "icons/facebook.png",
    "icons/instagram.png",
    "icons/youtube.png",
    "icons/gift.png",
    "icons/guide-de-voyage.png",
    "icons/polarsteps-white.webp",
    "icons/polarsteps-black.webp",
    "/Concept.webp",
    "/Cover1.webp",
    "/Cover2.webp",
    "/Cover3.webp",
    "/Cover4.webp",
    "/Cover5.webp",
    "/Cover6.webp",
    "/Cover7.webp",
    "/Cover8.webp",
    "/Jerome.webp",
    "Surf.webp",
    "Mountains.webp",
    "Streets.webp",
    "DesertNight.webp",
  ];

  useEffect(() => {
    imagesToPreload.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  return (
    <>
      <Head>
        <title>Trip & Ride - Guide Touristique 4x4 au Maroc</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
