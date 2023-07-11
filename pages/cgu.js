import styled from "styled-components";

const Container = styled.div`
  font-family: "Roxborough", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  color: #fff;
  text-align: center;
`;

export default function CGU() {
  return (
    <Container>
      <h1>Mentions légales</h1>
      <p>
        <em>En vigueur au 12/07/2023</em>
      </p>

      <p>
        Conformément aux dispositions des Articles 6-III et 19 de la Loi
        n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique,
        dite L.C.E.N., il est porté à la connaissance des utilisateurs et
        visiteurs, ci-après l'<strong>Utilisateur</strong>, du site
        alacool.vercel.app , ci-après le "<strong>Site</strong>", les présentes
        mentions Confiance dans l’économie numérique, dite L.C.E.N., il est
        porté à la connaissance des utilisateurs et légales.
      </p>

      <p>
        La connexion et la navigation sur le Site par l’Utilisateur implique
        acceptation intégrale et sans réserve des présentes mentions légales.
      </p>

      <p>
        Ces dernières sont accessibles sur le Site à la rubrique «{" "}
        <strong>Mentions légales</strong> ».
      </p>

      <h2>ARTICLE 1 - L'EDITEUR</h2>

      <p>
        L'édition du Site est assurée par CodeSacha, immatriculée au Registre du
        Commerce et des Sociétés de Brest sous le numéro 0101010101 dont le
        siège social est situé au 11 Rue Caulaincourt, 75018 PARIS.
      </p>

      <p>
        Numéro de téléphone 0123456789, Adresse e-mail : Jerome.2@me.com. N° de
        TVA intracommunautaire : 01010101010.
      </p>

      <p>
        Le Directeur de la publication est Sacha Bigou, ci-après l'"
        <strong>Editeur</strong>".
      </p>

      <h2>ARTICLE 2 - L'HEBERGEUR</h2>

      <p>
        L'hébergeur du Site est la société <strong>Vercel Inc</strong>., dont le
        siège social est situé au San Francisco, California, U.S.
      </p>

      <h2>ARTICLE 3 - ACCES AU SITE</h2>

      <p>
        Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force
        majeure, interruption programmée ou non et pouvant découlant d’une
        nécessité de maintenance.
      </p>

      <p>
        En cas de modification, interruption ou suspension du Site, l'Editeur ne
        saurait être tenu responsable.
      </p>

      <h2>ARTICLE 4 - COLLECTE DES DONNEES</h2>

      <p>
        Le site est exempté de déclaration à la Commission Nationale
        Informatique et Libertés (CNIL) dans la mesure où il ne collecte aucune
        donnée concernant les utilisateurs.
      </p>

      <p>
        Toute utilisation, reproduction, diffusion, commercialisation,
        modification de toute ou partie du Site, sans autorisation de l’Editeur
        est prohibée et pourra entraînée des actions et poursuites judiciaires
        telles que notamment prévues par le Code de la propriété intellectuelle
        et le Code civil.
      </p>
    </Container>
  );
}
