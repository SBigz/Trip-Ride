import React from "react";
import styled from "styled-components";

const Text = styled.div`
  font-family: "Roxborough", sans-serif;
  font-size: 1.03rem;
  border: 2px solid white;
  padding: 0 20px 0 20px;
  position: absolute;
  bottom: 20px;
  right: 50px;
  left: 50px;
  text-align: ${(props) => (props.textposition === "right" ? "right" : "left")};
  color: white;
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);

  --blur: 9px;
  border-radius: var(--radius);
  -webkit-backdrop-filter: blur(var(--blur));
  backdrop-filter: blur(var(--blur));
  --radius: 32px;
`;

export default function CoverText({ textposition, subtitle}) {
  return (
    <Text textposition={textposition}>
 
      <h2>{subtitle}</h2>
    </Text>
  );
}
