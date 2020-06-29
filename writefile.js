const fs = require('fs')

const content = '<h3>hello world</h3>'
fs.writeFile('./hello,txt', content, err => {
    if (err != null) {
        console.log(err);
        return
    }
    console.log('文件写入成功');

})