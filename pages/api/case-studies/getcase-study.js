// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';
import path from 'path';

export default function handler(req, res) {

  

  const filePath = path.resolve(`data/case-studies/${req.query.slug}.json`);

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'No Such Blog Found ' });
      return;
    }

    console.log(req.query.slug);

    res.status(200).json(JSON.parse(data));
  });
}
