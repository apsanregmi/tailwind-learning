import { dbConnect } from '../../../utils/dbConnect';

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        // Fetch newsletters from Snowflake
        const result = connection.execute({ sqlText: 'SELECT * FROM newsletter' });
        const newsletters = result.fetchAll();
        res.status(200).json({ newsletters });
      } catch (error) {
        res.status(500).json({ message: 'Error fetching emails', error: error.message });
      }
      break;

    case 'POST':
      try {
        const { email } = req.body;
        const query = `INSERT INTO newsletter (email, subscribed_at) VALUES ('${email}', CURRENT_TIMESTAMP)`;
        connection.execute({ sqlText: query });

        res.status(201).json({ message: 'Email saved successfully' });
      } catch (error) {
        res.status(500).json({ message: 'Error saving email', error: error.message });
      }
      break;

    default:
      res.status(405).json({ message: 'Method Not Allowed' });
      break;
  }
}
