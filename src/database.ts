import { Sequelize } from 'sequelize';

export const db: Sequelize = new Sequelize(
    <string>process.env.DB_NAME,
    <string>process.env.DB_USER,
    <string>process.env.DB_PASSWORD,
    {
        host: <string>process.env.DB_HOST,
        dialect: 'postgres',
        logging: console.log
    }
);