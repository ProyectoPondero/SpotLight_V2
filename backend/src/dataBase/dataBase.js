import mongoose from "mongoose";
import { URI } from "../configs/env.config.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log(`Conectado a la base de datos: ${mongoose.connection.name}🛢️`);
        return mongoose.connection;
    } catch (error) {
        console.error("Error al conectar a la base de datos", error);
    }
};