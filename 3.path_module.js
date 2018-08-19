var path = require('path');

// console.log('path', path);

// 給一個路徑,取得資料夾名稱
console.log('path.dirname: ', path.dirname('./xx/yy/zz.js'));
// 給一個路徑,取得檔案名稱
console.log('path.basename: ', path.basename('./xx/yy/zz.js'));
// 給一個路徑,取得副檔名
console.log('path.extname: ', path.extname('./xx/yy/zz.js'));
// 給一個不完整路徑,合併成完整路徑
console.log('path.join: ', path.join(__dirname, 'filename.css'));
// 完整分析一個路徑
console.log('path.parse(): ', path.parse(String.raw`C:\Users\chris2012\Desktop\Node.js\filename.css`));


// 使用 String.raw`字串` 忽略路徑跳脫字元
var a = `C:\Users\chris2012\Desktop\Node.js\filename.css`
var b = String.raw`C:\Users\chris2012\Desktop\Node.js\filename.css`

console.log('a: ', a);
console.log('b: ', b);