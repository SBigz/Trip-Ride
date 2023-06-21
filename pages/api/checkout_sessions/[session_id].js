const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

export default async (req, res) => {
  const { session_id: sessionId } = req.query;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: sessionId,
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${BASE_URL}`,
  });

  res.status(200).json({ session });
};
