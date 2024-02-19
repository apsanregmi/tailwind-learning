import { dbConnect } from '../../../utils/dbConnect';
import snowflake from 'snowflake-sdk';

export default async function handler(req, res) {
    try {
        // Establish a connection
        const connection = await dbConnect();

        // Use the connection to execute queries
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
                        VALUES (?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`;

                    // Execute the Snowflake query with parameterized values
                    await connection.execute({
                        sqlText: query,
                        binds: [
                            firstName,
                            lastName,
                            email,
                            companyName,
                            jobTitle,
                            phone,
                            subscribeNewsletter ? 1 : 0,
                        ],
                    });

                    res.status(201).json({ message: 'Your Registration successful' });
                } catch (error) {
                    console.error('Error executing query:', error);
                    res.status(500).json({ message: 'Error registering user', error: error.message });
                } finally {
                    // Close the connection after execution
                    connection.destroy();
                }
                break;

            default:
                res.status(405).json({ message: 'Method Not Allowed' });
                break;
        }
    } catch (error) {
        console.error('Error connecting to Snowflake:', error);
        res.status(500).json({ message: 'Error connecting to Snowflake', error: error.message });
    }
}
