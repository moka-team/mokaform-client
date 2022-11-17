const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://api.mokaform.site:8080",
      changeOrigin: true,
    })
  );
};
