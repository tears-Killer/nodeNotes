const http = require('http')

const app = http.createServer()

const url = require('url')

const path = require('path')

const fs = require('fs')

const mime = require('mime')

app.on('request', (req, res) => {
    let pathname = url.parse(req.url).pathname
    pathname = pathname == '/' ? 'index.html' : pathname

    const realpath = path.join(__dirname, pathname)

    let type = mime.getType(realpath)

    fs.readFile(realpath, (err, result) => {
        if (err != null) {
            res.writeHead(404, {
                'content-type': 'text/html;charset=utf-8'
            })
            res.end('404 NotFound')
        } else {
            res.writeHead(200, {
                'content-type': type
            })
            res.end(result)
        }
    })
})

app.listen(3000)
console.log('服务器开启成功');