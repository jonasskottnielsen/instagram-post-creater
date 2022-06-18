import dotenv from 'dotenv';

dotenv.config();

const config = {
	PRODUCTION: JSON.parse(process.env.PRODUCTION),
	TOKEN: process.env.TOKEN,
	BASE_URL: process.env.BASE_URL,
	API_VERSION: process.env.API_VERSION,
	USER_ID: process.env.USER_ID,
	DB_HOST: process.env.DB_HOST,
	DB_USERNAME: process.env.DB_USERNAME,
	DB_PASSWORD: process.env.DB_PASSWORD,
	DB_PORT: process.env.DB_PORT,
	DB_NAME: process.env.DB_NAME
};

export const {
	PRODUCTION,
	TOKEN,
	BASE_URL,
	API_VERSION,
	USER_ID,
	DB_HOST,
	DB_USERNAME,
	DB_PASSWORD,
	DB_PORT,
	DB_NAME
} = config;
