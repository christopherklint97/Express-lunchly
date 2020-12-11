/** Database for lunchly */

const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config();

let db;

if (process.env.DB_USER && process.env.DB_PASSWORD) {
  // If app is running on local env
  db = new pg.Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 5432,
    database: "lunchly",
    host: "/var/run/postgresql",
  });
} else {
  // If app is running on Heroku
  db = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
  });
}

db.connect();

module.exports = db;
