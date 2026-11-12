import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('out');
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.jpeg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.txt': 'text/plain' };
createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url || '/', 'http://localhost').pathname);
    if (pathname !== prefix && !pathname.startsWith(prefix + '/')) throw new Error('Outside prefix');
    let file = path.resolve(root, '.' + pathname.slice(prefix.length));
    if (file !== root && !file.startsWith(root + path.sep)) throw new Error('Outside export');
    if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
    const data = await readFile(file);
    res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(await readFile(path.join(root, '404.html')).catch(() => 'Not found'));
  }
}).listen(3000, '127.0.0.1', () => console.log(`Local static preview: http://127.0.0.1:3000${prefix}/`));
