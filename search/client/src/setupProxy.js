const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
      createProxyMiddleware('/api', {
        target: 'http://localhost:5000', // 转发目标服务器
        secure: false,    // 指定Cookies能否被用户读取
        changeOrigin: true,  // 允许跨域，控制请求头中host地址
        pathRewrite: { // 重新请求路径
          "^/api": "/"
        },
      }),
      createProxyMiddleware('/base', {
        target: 'http://localhost:5001',
        secure: false,    // 指定Cookies能否被用户读取
        changeOrigin: true,
        pathRewrite: {
          "^/base": "/api1"
        },
      })
    );
};