import { connection, sdbConnect, commit } from '../utils/sdbConnect';

const Newsletter = {
  findAll: async () => {
    try {
      await sdbConnect();

      const sql = `
        SELECT *
        FROM CLOUDPROAI_WEBSITE_ACTIVITY.SIGNUPFORM_SCHEMA.NEWSLETTER;
      `;

      const statement = await connection.execute({ sqlText: sql });
      return statement.fetchAll();
    } catch (error) {
      console.error('Error fetching newsletters:', error.message);
      throw new Error('Failed to fetch newsletters');
    }
  },

  create: async (email) => {
    try {
      await sdbConnect();

      const sql = `
        INSERT INTO CLOUDPROAI_WEBSITE_ACTIVITY.SIGNUPFORM_SCHEMA.NEWSLETTER (email)
        VALUES (?);
      `;

      const statement = await connection.execute({
        sqlText: sql,
        binds: [email],
      });

    //   await commit();

      console.log('Email inserted to Snowflake newsletter table successfully');

      return { success: true };
    } catch (error) {
      console.error('Error creating newsletter:', error.message);
      throw new Error('Failed to create newsletter');
    }
  },
};

export default Newsletter;
