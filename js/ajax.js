function ajax(options) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.open(options.method, options.url);

    // 设置请求头
    if (options.headers) {
      Object.keys(options.headers).forEach((header) => {
        xhr.setRequestHeader(header, options.headers[header]);
      });
    }

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(new Error(xhr.statusText));
      }
    };

    xhr.onerror = function () {
      reject(new Error("网络错误"));
    };

    xhr.timeout = options.timeout || 0;
    xhr.ontimeout = function () {
      reject(new Error("请求超时"));
    };

    xhr.send(options.data);
  });
}
