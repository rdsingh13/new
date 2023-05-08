const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://onlin-LoadB-12U5T18J0TO18-7c5f47c684b4f1ef.elb.eu-north-1.amazonaws.com:8081",
      changeOrigin: true,
    })
  );
};
