import { db } from './database';
import { Model, DataTypes, Sequelize } from 'sequelize';

export default class Book extends Model {}
Book.init(
    {
        id: {
            primaryKey: true,
            type: DataTypes.BIGINT,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        page: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        publisher: {
            type: DataTypes.STRING
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.fn('now'),
            allowNull: false
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.fn('now'),
            allowNull: false
        }
    },
    {
        modelName: 'books',
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,
        sequelize: db
    }
);