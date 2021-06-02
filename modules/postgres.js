const { Sequelize } = require('sequelize')
const UserModel = require('../models/UserModel')

require('dotenv').config()
const PG_URL = process.env.PG_URL

const sequelize = new Sequelize(PG_URL)

async function main () {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.');

        let db = {}

        db.users = await UserModel(Sequelize, sequelize)


    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main()