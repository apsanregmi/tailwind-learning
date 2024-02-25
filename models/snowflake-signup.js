// models/snowflake-signup.js

import { connection, sdbConnect } from '../utils/sdbConnect';

const Signup = {
  create: async (data) => {
    try {
      // Ensure connection to Snowflake is established
      await sdbConnect();

      const query = `
        INSERT INTO CLOUDPROAI_WEBSITE_ACTIVITY.SIGNUPFORM_SCHEMA.SIGNUP_DATA 
        (firstName, lastName, email, companyName, jobTitle, phone, subscribeNewsletter, createdAt)
        VALUES (?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
      `;
      console.log('Executing Snowflake query:', query);

      // Execute the query using the connection object
      const result = await connection.execute({
        sqlText: query,
        binds: [
          data.firstName,
          data.lastName,
          data.email,
          data.companyName,
          data.jobTitle,
          data.phone,
          data.subscribeNewsletter || false,
        ],
      });

      // await connection.commit()

      console.log('Signup created successfully:', result);

      return { success: true };
    } catch (error) {
      console.error('Error creating signup:', error.message);
      throw new Error('Failed to create signup');
    }
  },
};

export default Signup;