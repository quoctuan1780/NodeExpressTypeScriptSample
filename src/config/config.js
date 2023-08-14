// module.exports = {
//     "development": {
//         "dialect": "sqlite",
//         "storage": "../database/batterythuduc.sqlite3"
//     },
//     "test": {
//         "dialect": "sqlite",
//         "storage": "../database/batterythuduc.sqlite3"
//     },
//     "production": {
//         "dialect": "sqlite",
//         "storage": "../database/batterythuduc.sqlite3"
//     }
// }

const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    "development": {
        "username": process.env.DB_USER_NAME,
        "password": process.env.DB_PASSWORD,
        "dialect": "mysql",
        "host": process.env.DB_HOST,
        "database": process.env.DB_DATABASE_NAME
    },
    "test": {
        "username": process.env.DB_USER_NAME,
        "password": process.env.DB_PASSWORD,
        "dialect": "mysql",
        "host": process.env.DB_HOST,
        "database": process.env.DB_DATABASE_NAME
    },
    "production": {
        "username": process.env.DB_USER_NAME,
        "password": process.env.DB_PASSWORD,
        "dialect": "mysql",
        "host": process.env.DB_HOST,
        "database": process.env.DB_DATABASE_NAME
    }
}