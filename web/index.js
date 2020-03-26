const express = require('express')
const path = require('path')
const app = express()
const history = require('connect-history-api-fallback');

app.use('/',history())
app.use('/', express.static(path.resolve(__dirname, '..', 'dist')))

// if(process.env.NODE_ENV !== 'production'){
//     const webpack = require('webpack')
//     const webpackConfig = require('../webpack.dev')
//     const webpackCompiled = webpack(webpackConfig)

//     const webpackDevMiddleware = require('webpack-dev-middleware');
//     app.use(webpackDevMiddleware(webpackCompiled, {
//         publicPath:'/',//必填项，由于index.html请求的buildxxx.js存放的位置映射到服务器的URI路径是根
//         stats: {colors: true},//console统计日志带颜色输出
//         lazy: false,//懒人加载模式。true表示不监控源码修改状态，收到请求才执行webpack的build。false表示监控源码状态，配套使用的watchOptions可以设置与之相关的参数。
//         watchOptions: {
//             aggregateTimeout: 300,
//             poll: true
//         }
//     }));
//     const webpackHotMiddleware = require('webpack-hot-middleware');
//     app.use(webpackHotMiddleware(webpackCompiled))
// }

const server = app.listen(3000, function() {
    let port = server.address().port;
    console.log('open http://localhost: %s', port)
})
