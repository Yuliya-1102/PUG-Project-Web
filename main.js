const fs = require('fs');
const pug = require('pug');

let goodsData = JSON.parse(fs.readFileSync('goods/data.json', 'utf8'));

function buildGoodList(){
    let compileFunc = pug.compileFile('layout/base.pug');
    let html = compileFunc(goodsData);
    fs.writeFileSync('dist/index.html', html);
}
buildGoodList();
