// utils/sdbConnect.js
import snowflake from 'snowflake-sdk';

const SNOWFLAKE_CONFIG = {
  account: process.env.SNOWFLAKE_ACCOUNT,
  username: process.env.SNOWFLAKE_USERNAME,
  password: process.env.SNOWFLAKE_PASSWORD,
  warehouse: process.env.SNOWFLAKE_WAREHOUSE,
  database: process.env.SNOWFLAKE_DATABASE,
  schema: process.env.SNOWFLAKE_SCHEMA,
  // Set autoCommit to true to commit changes immediately
  autoCommit: true,
};

let connection;

const sdbConnect = async () => {
  try {
    if (!connection || !connection.isUp()) {
      connection = snowflake.createConnection(SNOWFLAKE_CONFIG);
      await connection.connect();
      console.log('Connected to Snowflake');
    } else {
      console.log('Already connected to Snowflake');
    }
  } catch (error) {
    console.error('Error connecting to Snowflake:', error.message);
  }
};

export { connection, sdbConnect };
