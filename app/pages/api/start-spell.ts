// pages/api/start-spell.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { startSpell } from './api';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const result = await startSpell();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: 'Failed to start spell' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}