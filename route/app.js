const http = require('http')

const app = http.createServer()

const url = require('url')

const querystring = require('querystring')

app.on('request', (req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    })

    const method = req.method.toLowerCase()

    if (method == 'get') {
        const pathname = url.parse(req.url).pathname

        if (pathname == '/index' || pathname == '/') {
            res.end('主页面')
        } else if (pathname == 'login') {
            res.end('登陆页面')
        } else {
            res.end('404 NotFound')
        }
    } else {
        let postParams = ''
        req.on('data', params => {
            postParams += params
        })
        req.on('end', () => {
            console.log(querystring.parse(postParams));

        })
        if (req.url == '/index' || req.url == '/') {
            res.end('主页面')
        } else if (req.url == '/login') {
            res.end('登陆页面')
        } else {
            res.end('404 NotFound')
        }
    }
})

app.listen(3000)
console.log('服务器开启成功');

