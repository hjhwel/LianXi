// 暴漏出去一个对象
export default {
  // 对象里面有个install 方法可以被vue.use 调用
  install(Vue) {
    let ajax = (url) => {
      return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        let timeS = new Date().getTime().toString();
        xhr.open("GET", url + "&timeS=" + timeS);
        xhr.send();
        xhr.onreadystatechange = () => {
          if (xhr.readyState == 4) {
            if (xhr.status == 200) {
              resolve(JSON.parse(xhr.responseText))
            } else {
              reject("err", xhr.status)
            }
          }
        }
      })
    }

    Vue.prototype.$ajax = ajax;
  }
}
