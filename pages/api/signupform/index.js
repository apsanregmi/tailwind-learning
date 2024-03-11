





import dbConnect from '../../../utils/dbConnect';
import Signup from '../../../models/signupform';

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case 'POST':
      try {
            
            const { firstName, lastName, email, companyName, jobTitle, phone, subscribeNewsletter,referralLink  } = req.body;

        // Check for existing email
        const existingUser = await Signup.findOne({ email });

        // Handle duplicate email:
        if (existingUser) {
          await Signup.updateOne({ email }, { $addToSet: { referralLinks: referralLink } });
          res.status(200).json({ message: 'You have already registered. Redirecting .' });
          // Consider adding logic to update existing user data if needed
        } else {
          const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
          
          // Create a new Signup instance
          const newSignup = new Signup({
            firstName,
            lastName,
            email,
            companyName,
            jobTitle,
            phone,
            subscribeNewsletter,
            referralLink,
            ipAddress,
          });

          console.log("referral Link is :", referralLink)

          // Save the newSignup to the database
          await newSignup.save();

          res.status(200).json({ message: 'Registration successful. Redirecting ' });
        }
      } catch (error) {
        console.error('Error saving signup data:', error);
        res.status(500).json({ message: 'Error saving signup data' });
      }
      break;

    default:
      res.status(405).json({ message: 'Method Not Allowed' });
      break;
  }
}

