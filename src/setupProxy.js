const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://ip-210-109-60-220.c.kr-central-1.kakaokic.com.",
      changeOrigin: true,
    })
  );
};
