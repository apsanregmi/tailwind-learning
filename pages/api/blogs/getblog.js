// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { slug } = req.query;
  const filePath = path.resolve(`data/blogs/${slug}.json`);

  if (req.method === 'GET') {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        res.status(500).json({ error: 'No Such Blog Found ' });
        return;
      }

      res.status(200).json(JSON.parse(data));
    });
  } else if (req.method === 'POST') {
    // Ensure required parameters are present
    const { likes, dislikes, comments } = req.body;
    if (likes === undefined || dislikes === undefined || comments === undefined) {
      res.status(400).json({ error: 'Missing parameters in the request' });
      return;
    }

    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        res.status(500).json({ error: 'No Such Blog Found ' });
        return;
      }

      const blogData = JSON.parse(data);

      // Update the likes, dislikes, and comments
      blogData.likes = likes;
      blogData.dislikes = dislikes;
      blogData.comments = comments;

      // Save the updated content back to the file
      fs.writeFile(filePath, JSON.stringify(blogData, null, 2), (err) => {
        if (err) {
          res.status(500).json({ error: 'Error updating blog data' });
          return;
        }

        res.status(200).json({ success: true });
      });
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
