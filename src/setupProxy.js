const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://web-reads-backend.herokuapp.com/',
      changeOrigin: true,
    })
  ),
  app.use(
    '/recommend',
    createProxyMiddleware({
      target: 'https://web-reads-ml.herokuapp.com/',
      changeOrigin: true,
    })
  )
};