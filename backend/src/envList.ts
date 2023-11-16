import dotenv from 'dotenv';
if (process.env.NODE_ENV === 'develop') dotenv.config();
export const DB_HOST = process.env.DB_HOST as string;
