//引用fs(读取文件)模块
const fs = require('fs')

//通过模块内部的readFile读取文件内容
fs.readFile('./hello.js', 'utf-8', (err, doc) => {
    if (err == null) {
        console.log(doc);
    } else {
        console.log(err);
    }

})