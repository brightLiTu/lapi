import axios from "./axios.js";

function extendOption(option) {
  var sUrl = severUrl(option.url);

  option.headers["x-layi-proxy-url"] = sUrl[0];
  option.headers["x-layi-proxy-path"] = sUrl[1];
  option.url = "/proxy";
  return option;
}

function severUrl(url) {
  var urlReg = /((http|https|ws):\/\/[^/]+)(.*)/;
  var result = url.match(urlReg);
  return result && [result[1], result[3] || "/", result[2]];
}
function encode(val) {
  return encodeURIComponent(val)
    .replace(/%40/gi, "@")
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}

export function serializedParams(arr, isEncode) {
  var parts = [];

  for (var i = 0, l = arr.length - 1; i < l; i++) {
    let v = arr[i];
    parts.push(
      isEncode ? encode(v.key) + "=" + encode(v.value) : v.key + "=" + v.value
    );
  }

  let params = parts.join("&");
console.log(params)
  return params;
}

export function paramsToArray(url) {
  let arr = [];
  let index = -1;
  if ((index = url.indexOf("?")) !== -1) {
    let params = url.substring(index + 1);
    if (params == "") return arr;
    params = params.split("&");
    for (var i = 0; i < params.length; i++) {
      let p = params[i].split("=");
      arr.push({
        key: decodeURIComponent(p[0] || ""),
        value: decodeURIComponent(p[1] || "")
      });
    }
  }
  return arr;
}

export function proxySend(option) {
  return axios(extendOption(option)).then(function(res) {
    res.resHeaders = JSON.parse(res.headers["x-lapi-proxy-headers"]);
    res.time = res.headers["x-lapi-proxy-time"];
    return res;
  });
}
