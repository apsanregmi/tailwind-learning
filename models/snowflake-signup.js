// models/snowflake-signup.js

import { connection } from '../utils/sdbConnect';

const Signup = {
  create: async (data) => {
    try {
      const query = `
        INSERT INTO CLOUDPROAI_WEBSITE_ACTIVITY.SIGNUPFORM_SCHEMA.SIGNUP_DATA 
        (firstName, lastName, email, companyName, jobTitle, phone, subscribeNewsletter, createdAt)
        VALUES (?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
      `;

      const statement = connection.execute({
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

      // Execute the query
      statement.execute();

      return { success: true };
    } catch (error) {
      console.error('Error creating signup:', error.message);
      throw new Error('Failed to create signup');
    }
  },
};

export default Signup;
