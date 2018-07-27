const methods = ["POST", "GET", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"];

const headersMap = {
  "form-data": "multipart/form-data",
  "x-www-form-urlencoded": "application/x-www-form-urlencoded",
  json: "application/json",
  raw: "raw"
};

const headers = ["form-data", "x-www-form-urlencoded", "raw"];

// export function extendArray(target, arr) {
//   let arrLen = arr.length;
//   let tarLen = target.length;
//   if(tarLen!=len){
//   }

//   for (var i = 0; i < target.length; i++) {
//     Object.assign(target[i], arr[i]);
//   }
// }

export { headersMap, headers, methods };
