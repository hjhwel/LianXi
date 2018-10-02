/**
 * get ajax
 * promise 封装
 * @param {*} url 访问的服务器地址
 * @returns 取得的值
 */

function get(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("get", url);
        xhr.send();

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    try {
                        var response = xhr.responseText
                        resolve(response);
                    } catch (err) {
                        reject(err)
                    }
                } else {
                    reject(new Error(xhr.statusText))
                }
            }
        }
    })
}