import dotenv from 'dotenv';
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'develop') dotenv.config();
export const FULL_CHAIN = process.env.FULL_CHAIN || 'asd';
export const PRIVATE_KEY = process.env.PRIVATE_KEY || 'asda';
export const CERT = process.env.CERT || 'asda';
console.log(FULL_CHAIN, PRIVATE_KEY, CERT);
