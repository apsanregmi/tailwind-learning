
import { createConnection } from 'snowflake-sdk';

const snowflakeConfig = {
    account: process.env.SNOWFLAKE_ACCOUNT,
    username: process.env.SNOWFLAKE_USER,
    password: process.env.SNOWFLAKE_PASSWORD,
    warehouse: process.env.SNOWFLAKE_WAREHOUSE,
    database: process.env.SNOWFLAKE_DATABASE,
    schema: process.env.SNOWFLAKE_SCHEMA,
};

const connection = createConnection(snowflakeConfig);

export const dbConnect = async () => {
    if (!connection.isUp()) {
        await connection.connect();
    }
    return connection;
};
