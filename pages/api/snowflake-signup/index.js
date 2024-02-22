// pages/api/signup.js

import { sdbConnect } from '@/utils/sdbConnect';
import Signup from '@/models/snowflake-signup';

const handler = async (req, res) => {
  try {
    console.log('Request Body:', req.body);

    await sdbConnect();

    if (req.method === 'POST') {
      const result = await Signup.create(req.body);
      res.status(201).json({ success: true, message: 'Signup created successfully' });
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error in Snowflake API:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default handler;
