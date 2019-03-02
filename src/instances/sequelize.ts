// src/instances/sequelize.ts

import * as seq from 'sequelize'

const db = 'bearapp'
const username = 'root'
const password = 'root'

export const sequelize = new seq(db, username, password, {
    dialect: "mysql",
    port: 3306,
});

sequelize.authenticate()