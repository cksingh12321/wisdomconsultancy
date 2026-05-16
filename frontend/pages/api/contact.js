// Vercel-side API route that forwards contact-form submissions to the
// FastAPI backend hosted on HuggingFace Spaces. Doing the proxy here keeps
// the HF URL on the server side and avoids any CORS surprises in the browser.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL;
  if (!apiUrl) {
    return res.status(500).json({ error: 'Backend API URL is not configured (set NEXT_PUBLIC_API_URL).' });
  }

  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email and message are required.' });
  }

  try {
    const upstream = await fetch(`${apiUrl.replace(/\/$/, '')}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    const data = await upstream.json().catch(() => ({}));
    if (!upstream.ok) {
      return res.status(upstream.status).json({ error: data.error || 'Backend rejected the submission.' });
    }
    return res.status(200).json(data);
  } catch (err) {
    return res.status(502).json({ error: 'Unable to reach the backend. Please try again later.' });
  }
}
