// pages/api/signupform.js

import dbConnect from '../../../utils/dbConnect';
import SignupModel from '../../../models/signup'; // Make sure to import your Mongoose model

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case 'POST':
      try {
        const { firstName, lastName, email, companyName, jobTitle, phone, subscribeNewsletter } = req.body;

        // Create a new instance of your Mongoose model
        const newSignup = new SignupModel({
          firstName,
          lastName,
          email,
          companyName,
          jobTitle,
          phone,
          subscribeNewsletter,
        });

        // Save the data to the database
        await newSignup.save();

        res.status(201).json({ message: 'Registration successful!' });
      } catch (error) {
        res.status(500).json({ message: 'Error saving data', error: error.message });
      }
      break;

    default:
      res.status(405).json({ message: 'Method Not Allowed' });
      break;
  }
}
