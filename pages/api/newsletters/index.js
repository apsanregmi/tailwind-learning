import dbConnect from '../../../utils/dbConnect';
import Newsletter from '../../../models/newsletter';

export default async function handler(req, res) {
    await dbConnect();

    switch (req.method) {

        case 'GET':
            try {
                const newsletters = await Newsletter.find();
                res.status(200).json({ newsletters });
            } catch (error) {
                res.status(500).json({ message: 'Error fetching emails', error: error.message });
            }
            break;

        case 'POST':
            try {
                const { email } = req.body;
                const newEmail = new Newsletter({ email });
                await newEmail.save();

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
