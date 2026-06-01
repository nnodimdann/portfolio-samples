const http = require('http');
const fs = require('fs');
const path = require('path');
const dist = path.join(__dirname, 'dist');
const mime = {'.html':'text/html','.css':'text/css','.js':'application/javascript','.pdf':'application/pdf','.svg':'image/svg+xml'};
const server = http.createServer((req,res)=>{
  const urlPath = req.url === '/' ? '/index.html' : req.url.split('?')[0];
  const file = path.join(dist, decodeURIComponent(urlPath));
  if (!file.startsWith(dist)) { res.writeHead(403); return res.end('Forbidden'); }
  fs.readFile(file, (err,data)=>{
    if (err) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, {'Content-Type': mime[path.extname(file)] || 'application/octet-stream'});
    res.end(data);
  });
});
server.listen(process.env.PORT || 3000, '0.0.0.0', ()=>console.log('Serving portfolio'));
