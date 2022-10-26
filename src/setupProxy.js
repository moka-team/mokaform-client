const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://210.109.60.220:8080",
      changeOrigin: true,
    })
  );
};
