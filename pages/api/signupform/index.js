import dbConnect from '../../../utils/dbConnect';
import Signup from '../../../models/signupform';

export default async function handler(req, res) {
    await dbConnect();

    switch (req.method) {
        case 'POST':
            try {
                const { firstName, lastName, email, companyName, jobTitle, phone, subscribeNewsletter } = req.body;

                // Create a new Signup instance
                const newSignup = new Signup({
                    firstName,
                    lastName,
                    email,
                    companyName,
                    jobTitle,
                    phone,
                    subscribeNewsletter,
                });

                // Save the newSignup to the database
                await newSignup.save();

                // Redirect to Facebook using Next.js router
                res.status(302).redirect('/index'); // Redirect to a "success" page or directly to Facebook
            } catch (error) {
                console.error('Error saving signup data:', error);
                res.status(500).json({ message: 'Error saving signup data', error: error.message });
            }
            break;

        default:
            res.status(405).json({ message: 'Method Not Allowed' });
            break;
    }
}
