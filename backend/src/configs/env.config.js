import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT;
export const URI = process.env.MONGODB_URI;
export const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
export const API_KEY = process.env.CLOUDINARY_API_KEY;
export const API_SECRET = process.env.CLOUDINARY_API_SECRET;
export const JWT_KEY = process.env.JWT_SECRET_KEY;