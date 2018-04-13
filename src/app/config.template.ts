const STRIPE_PUBLIC_KEY = 'stripe-pub-key';

export const config = {
  dev: {
    stripePublicKey: STRIPE_PUBLIC_KEY,
    backendUrl: 'front-end-url'
  },
  prod: {
    stripePublicKey: STRIPE_PUBLIC_KEY,
    backendUrl: 'front-end-url'
  }
};
