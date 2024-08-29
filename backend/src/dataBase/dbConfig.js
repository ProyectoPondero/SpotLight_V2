import { Sequelize } from "sequelize";

// Database connection from Sequelize
export const sequelize = new Sequelize(
    'spotbeta', // Database name
    'root',
    '', {
    host: 'localhost', // Database host
    dialect: 'mysql'    // Database dialect
});

// Test connection
export const connectDB = async () => {
    try {
        await sequelize.sync();
        console.log('Conexión establecida con la base de datos');
    } catch (error) {
        console.error('No se a podido establecer la conección:', error);
    }
};