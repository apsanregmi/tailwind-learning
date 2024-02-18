import { dbConnect } from '../../../utils/dbConnect';

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case 'POST':
      try {
        const {
          firstName,
          lastName,
          email,
          companyName,
          jobTitle,
          phone,
          subscribeNewsletter,
        } = req.body;

        const query = `
          INSERT INTO signup_data (
            first_name,
            last_name,
            email,
            company_name,
            job_title,
            phone,
            subscribe_newsletter,
            registered_at
          )
          VALUES (
            '${firstName}',
            '${lastName}',
            '${email}',
            '${companyName}',
            '${jobTitle}',
            '${phone}',
            ${subscribeNewsletter ? 1 : 0},
            CURRENT_TIMESTAMP
          )`;

        // Execute the Snowflake query
        const result = connection.execute({ sqlText: query });

        res.status(201).json({ message: 'Registration successful' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error registering user', error: error.message });
      }
      break;

    default:
      res.status(405).json({ message: 'Method Not Allowed' });
      break;
  }
}
