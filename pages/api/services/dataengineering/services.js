// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const filePath = path.resolve('data/services/dataengineering/');

  try {
    const files = await fs.promises.readdir(filePath);
    let allServices = [];

    for (const file of files) {
      const fileContent = await fs.promises.readFile(
        path.join(filePath, file),
        'utf-8'
      );
      
      allServices.push(JSON.parse(fileContent));
    }

    res.status(200).json(allServices);
  } catch (error) {
    console.error('Error reading files:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
