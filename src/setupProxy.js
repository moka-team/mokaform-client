const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    createProxyMiddleware('/analysis/', {
      target: 'https://42d1adfb-5b9c-4cb1-8351-670c4a4c3b25.api.kr-central-1.kakaoi.io/ai/conversation/f54447ad459c4079880862d1b333d9e6',
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware('/api/', {
      target: 'http://api.mokaform.site:8080/',
      changeOrigin: true,
    }),
  );
};