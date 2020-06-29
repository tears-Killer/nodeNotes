const http = require('http')
//处理url地址
const url = require('url')
//app对象就是网站服务器对象
const app = http.createServer()

//获取客户端请求
app.on('request', (req, res) => {
    //1.要解析的url地址 2.将查询到的参数解析成对象
    let { query, pathname } = (url.parse(req.url, true));
    console.log(query.name);

    //设置状态码
    res.writeHead(200, {
        'content-type': 'text/plain;charset=utf8' //纯文本
        // 'content-type': 'text/html' html代码
    })

    //获取请求报文
    // console.log(req.headers['accept']);

    //获取请求地址
    if (pathname == '/index' || pathname == '/') {
        res.end('主页面')
    } else if (pathname == '/list') {
        res.end('列表')
    } else {
        res.end('404 NotFound')
    }

    //获取请求方式
    if (req.method == 'POST') {
        res.end('post')
    } else if (req.method == 'GET') {
        res.end('get')
    }
    // res.end('hello')
})

app.listen(3000)
console.log('网站服务器启动成功');
