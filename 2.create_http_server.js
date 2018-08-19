
// 引入 Node.js 內建 http 模組
var http = require('http');

// 開啟一個伺服器
const proxy = http.createServer((req, res) => {
    // console.log('request', req);
    // 依序寫入 header, body, end message
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>Hello HTTP!!</h1>');
    res.end('okay');
    // console.log('code', http.STATUS_CODES);
    console.log('code', http.METHODS);
    console.log('code', http.get);
    console.log('dirName', __dirname);
    console.log('fileName', __filename);
    
})

proxy.listen(8080,'127.0.0.1');