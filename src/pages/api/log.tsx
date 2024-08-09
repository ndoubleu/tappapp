// pages/api/log.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { message } = req.body;
    console.log(message);
    res.status(200).json({ status: 'ok' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
