import dotenv from 'dotenv';
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'develop') dotenv.config();
export const FULL_CHAIN = process.env.FULL_CHAIN as string;
export const PRIVATE_KEY = process.env.PRIVATE_KEY as string;
export const CERT = process.env.CERT as string;
