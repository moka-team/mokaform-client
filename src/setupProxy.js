const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");

module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://http://ip-210-109-60-220.c.kr-central-1.kakaokic.com.",
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
};
