// Minimal test server — no Express, no ESM, no dependencies
// Used to verify Render can route HTTP traffic to the service
const http = require('http');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  console.log(`[req] ${req.method} ${req.url}`);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'ok', url: req.url, time: new Date().toISOString() }));
});

server.listen(Number(PORT), '0.0.0.0', () => {
  console.log(`Minimal server on 0.0.0.0:${PORT}`);
});

process.on('uncaughtException', (err) => {
  console.error('uncaughtException:', err);
});
process.on('unhandledRejection', (err) => {
  console.error('unhandledRejection:', err);
});
