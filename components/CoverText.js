import React from "react";
import styled from "styled-components";

const Text = styled.div`
  font-family: "Roxborough", sans-serif;
  font-size: 1.05vw;
  border: 2px solid white;
  padding: 0 15px 0 15px;
  position: absolute;
  bottom: 10px;
  right: 50px;
  left: 50px;
  text-align: ${(props) => (props.textposition === "right" ? "right" : "left")};
  color: white;
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);

  --blur: 9px;
  border-radius: var(--radius);
  -webkit-backdrop-filter: blur(var(--blur));
  backdrop-filter: blur(var(--blur));
  --radius: 20px;
`;

export default function CoverText({ textposition, subtitle}) {
  return (
    <Text textposition={textposition}>
      <h2>{subtitle}</h2>
    </Text>
  );
}
