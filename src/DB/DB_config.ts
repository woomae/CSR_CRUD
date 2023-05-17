import { Sequelize } from 'sequelize';
import Topic from "../models/DB_model";
import "dotenv/config";

const dbconn = new Sequelize({
    host: process.env.HOST,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    dialect: 'mysql'
    }
);
Topic.initialize(dbconn);

export default Topic;