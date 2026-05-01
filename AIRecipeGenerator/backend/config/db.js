import { text } from "express";
import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
});

pool.on("connect", () => {
  console.log("Connect to neon database!");
});

pool.on("error", (err) => {
  console.error("Unexpected error!", err);
  process.exit(-1);
});

export default {
  query: (text, params) => pool.query(text, params),
  pool,
};
