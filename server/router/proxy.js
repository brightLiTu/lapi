var express = require("express");

var httpProxy = require("http-proxy");
var proxy = httpProxy.createProxyServer({});

var router = new express.Router();
router.use("/", function(req, res) {
  var proxyUrl = req.headers["x-layi-proxy-url"];
  var proxyPath = req.headers["x-layi-proxy-path"];
  req.headers.referer = proxyUrl;
  if (proxyUrl && proxyPath) {
    delete req.headers["x-layi-proxy-url"];
    delete req.headers["x-layi-proxy-path"];

    req.url = proxyPath;
    proxy.web(req, res, {
      target: proxyUrl,
      changeOrigin: true,
      cookiePathRewrite: "/",
      cookieDomainRewrite: "."
    });
  } else {
    res.status(500).send("params error");
  }
});

proxy.on("proxyReq", function(proxyReq, req, res, option) {
  res.setHeader("x-lapi-proxy-time", new Date().getTime());
});
proxy.on("proxyRes", function(proxyRes, req, res) {
  if (res.hasHeader("x-lapi-proxy-time")) {
    res.setHeader(
      "x-lapi-proxy-time",
      new Date().getTime() - res.getHeader("x-lapi-proxy-time")
    );
  }
  res.setHeader("x-lapi-proxy-headers", JSON.stringify(proxyRes.headers));
});

module.exports = router;
