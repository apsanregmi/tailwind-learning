// // import mongoose from 'mongoose';

// // // const MONGODB_CONNECTION_STRING = process.env.NEXT_PUBLIC_MONGODB_CONNECTION_STRING
// // const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;

// // console.log('hi this is new', process.env)



// // const dbConnect = async () => {
// //   console.log('db connected');
// //   console.log(process.env);
// //   try {
// //     console.log('hello tried')
// //     if (mongoose.connection.readyState !== 1) {
// //       console.log('mongose.connection');
// //       await mongoose.connect(MONGODB_CONNECTION_STRING, {
// //         useUnifiedTopology: true,
// //         useNewUrlParser: true, // Add this line
// //       });
// //       console.log('Connected to MongoDB');
// //     }
// //   } catch (error) {
// //     console.error('Error connecting to MongoDB:', error.message);
// //   }
// // };


// // export default dbConnect;
// import { createConnection } from 'snowflake-sdk';

// const snowflakeConfig = {
//   account: process.env.SNOWFLAKE_ACCOUNT,
//   username: process.env.SNOWFLAKE_USER,
//   password: process.env.SNOWFLAKE_PASSWORD,
//   warehouse: process.env.SNOWFLAKE_WAREHOUSE,
//   database: process.env.SNOWFLAKE_DATABASE,
//   schema: process.env.SNOWFLAKE_SCHEMA,
// };

// const connection = createConnection(snowflakeConfig);

// const dbConnect = async () => {
//   if (!connection.isUp()) {
//     await connection.connect();
//   }
// };

// export { dbConnect };

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
