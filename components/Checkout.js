import { loadStripe } from '@stripe/stripe-js';
import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const glowingButton = keyframes`
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
`;

const Button = styled.button`
font-family: "Roxborough", sans-serif;
font-size: 1.1rem;
  font-weight: 700;
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #fffb00,
      #ff7300,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: ${glowingButton} 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;  }

  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #222;
    left: 0;
    top: 0;
    border-radius: 10px;  
  }

`;

export default function Checkout({ product }) {
  const [session, setSession] = useState(null);

  // Fetch checkout session on page load
  useEffect(() => {
    const fetchSession = async () => {
      const response = await fetch(`/api/checkout_sessions/${product.id}`, {
        method: 'GET',
      });

      const data = await response.json();
      setSession(data.session);
    };

    fetchSession();
  }, [product]);

  // When the 'Pay' button is clicked
  const handleClick = async () => {
    const stripe = await stripePromise;

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <Button role="link" onClick={handleClick}>
      Réserver
    </Button>
  );
};
