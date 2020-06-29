const http = require('http')
//处理url地址
const url = require('url')
//app对象就是网站服务器对象
const app = http.createServer()
//处理请求参数模块
const querystring = require('querystring')
//获取客户端请求
app.on('request', (req, res) => {
    //post参数是通过事件的方式接收 data end
    let postParams = ''
    req.on('data', params => {
        postParams += params
    })

    req.on('end', () => {
        console.log(querystring.parse(postParams));

    })
    res.end('ok')
})

app.listen(5000)
console.log('网站服务器启动成功');
