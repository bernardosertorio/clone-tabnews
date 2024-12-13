import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });

  try {
    await client.connect();
    const result = await client.query(queryObject);

    console.log("✅ Query Success!", queryObject);

    return result;
  } catch (error) {
    console.error("⛔ Query Error: ", queryObject, error.message);
  } finally {
    await client.end();
  }
}

export default {
  query: query,
};
