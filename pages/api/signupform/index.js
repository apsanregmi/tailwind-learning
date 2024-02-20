// import dbConnect from '../../../utils/dbConnect';
// import Signup from '../../../models/signupform';

// export default async function handler(req, res) {
//     await dbConnect();

//     switch (req.method) {
//         case 'POST':
//             try {
//                 const { firstName, lastName, email, companyName, jobTitle, phone, subscribeNewsletter } = req.body;

//                 // Create a new Signup instance
//                 const newSignup = new Signup({
//                     firstName,
//                     lastName,
//                     email,
//                     companyName,
//                     jobTitle,
//                     phone,
//                     subscribeNewsletter,
//                 });

//                 // Save the newSignup to the database
//                 await newSignup.save();

//                 res.status(201).json({ message: 'Registration successful' });

//                 // Redirect to Facebook using Next.js router
//                 res.status(302).redirect('/index'); // Redirect to a "success" page or directly to Facebook
//             } catch (error) {
//                 console.error('Error saving signup data:', error);
//                 res.status(500).json({ message: 'Error saving signup data', error: error.message });
//             }
//             break;

//         default:
//             res.status(405).json({ message: 'Method Not Allowed' });
//             break;
//     }
// }





import dbConnect from '../../../utils/dbConnect';
import Signup from '../../../models/signupform';

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case 'POST':
      try {
        const { firstName, lastName, email, companyName, jobTitle, phone, subscribeNewsletter } = req.body;

        // Check for existing email
        const existingUser = await Signup.findOne({ email });

        // Handle duplicate email:
        if (existingUser) {
          res.status(200).json({ message: 'You have already registered. Redirecting to Blogs.' });
          // Consider adding logic to update existing user data if needed
        } else {
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

          res.status(200).json({ message: 'Registration successful. Redirecting to Blogs' });
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

