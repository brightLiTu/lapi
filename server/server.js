var express = require("express");
var history = require("connect-history-api-fallback");
var compression = require('compression')
var proxy = require("./router/proxy.js");
var app = express();

app.use("/proxy", proxy);

//开启 gzip 
app.use(compression());

//开启 h5 history
app.use(
  history({
    // verbose: true
  })
);

// 静态目录
app.use(express.static("www"));

app.listen(8800, function() {
  console.log("监听8800端口");
});
