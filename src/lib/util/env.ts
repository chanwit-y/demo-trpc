import dotenv from "dotenv";
dotenv.config();

export const env = {
  VITE_DB_NAME: process.env.VITE_DB_NAME,
  VITE_DB_HOST: process.env.VITE_DB_HOST,
  VITE_AZ_CLIENT_ID: process.env.VITE_AZ_CLIENT_ID,
  VITE_AZ_TENANT_ID: process.env.VITE_AZ_TENANT_ID,
  VITE_AZ_CLIENT_SECRET: process.env.VITE_AZ_CLIENT_SECRET
};
