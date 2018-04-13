import { config } from '../app/config';

export const environment = {
  production: true,
  backendUrl: config.prod.backendUrl,
  stripePublicKey: config.prod.stripePublicKey
};