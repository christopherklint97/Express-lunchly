/** Database for lunchly */

const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const db = new pg.Client({
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  port: 5432,
  database: "lunchly",
  host: "/var/run/postgresql",
});

db.connect();

module.exports = db;
