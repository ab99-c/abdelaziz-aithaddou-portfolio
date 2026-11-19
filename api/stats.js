// api/stats.js — Serverless Function for Zero-Touch Metrics Sync
export default async function handler(req, res) {
  // CORS & Global Vercel Edge Caching (cached 1 hour, stale-while-revalidate 24 hours)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const defaultData = {
    username: 'ab99-c',
    name: 'Abdelaziz Ait-Haddou',
    title: 'Full-Stack Developer & CTO',
    commitsCount: '7,130+',
    clientsCount: '100+',
    publicRepos: 7,
    followers: 12,
    status: 'Available for Global Remote & Relocation',
    focus: 'React · tRPC · Node.js · Python · Unity · Embedded AI (ESP32)',
    lastSync: new Date().toISOString(),
    mode: 'live-cache'
  };

  try {
    const headers = {
      'User-Agent': 'Abdelaziz-Portfolio-App'
    };

    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const userRes = await fetch('https://api.github.com/users/ab99-c', {
      headers,
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!userRes.ok) {
      return res.status(200).json(defaultData);
    }

    const user = await userRes.json();

    return res.status(200).json({
      username: user.login,
      name: user.name || 'Abdelaziz Ait-Haddou',
      title: 'Full-Stack Developer & CTO',
      commitsCount: '7,130+',
      clientsCount: '100+',
      publicRepos: user.public_repos || 7,
      followers: user.followers || 0,
      avatarUrl: user.avatar_url,
      profileUrl: user.html_url,
      status: 'Available for Global Remote & Relocation',
      focus: 'React · tRPC · Node.js · Python · Unity · Embedded AI (ESP32)',
      lastSync: new Date().toISOString(),
      mode: 'live'
    });
  } catch (err) {
    // Graceful fallback to verified metrics
    return res.status(200).json(defaultData);
  }
}
