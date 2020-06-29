const fs = require('fs')

fs.readFile('./1.txt', 'utf8', (err, res) => {
    console.log(res);
    fs.readFile('./2.txt', 'utf8', (err, res) => {
        console.log(res);
        fs.readFile('./3.txt', 'utf8', (err, res) => {
            console.log(res);
        })
    })
})