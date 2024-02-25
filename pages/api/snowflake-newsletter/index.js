// pages/api/snowflake-newsletter/index.js
import Newsletter from "@/models/snowflake-newsletter";

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      try {
        const newsletters = await Newsletter.findAll();
        res.status(200).json({ newsletters });
      } catch (error) {
        console.error('Error fetching emails:', error);
        res.status(500).json({ message: 'Error fetching emails', error: error.message });
      }
      break;

    case 'POST':
      try {
        const { email } = req.body;
        const insertedRecord = await Newsletter.create(email);

        res.status(201).json({ message: 'Email saved successfully', insertedRecord });
      } catch (error) {
        console.error('Error saving email:', error);
        res.status(500).json({ message: 'Error saving email', error: error.message });
      }
      break;

    default:
      res.status(405).json({ message: 'Method Not Allowed' });
      break;
  }
}
