// import { Client } from 'pg';

import { Pool } from "pg";

// const client = new Client({
//     connectionString: process.env.DATABASE_URL,
// });

// client.connect();

// export default client;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default pool;
