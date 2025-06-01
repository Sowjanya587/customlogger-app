export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('inArguments:', req.body.inArguments);
    res.status(200).json({ status: 'executed' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
