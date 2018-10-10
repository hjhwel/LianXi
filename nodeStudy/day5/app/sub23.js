//我们这里使用CommonJS的风格

// function generateText() {
//   var element = document.createElement('h2');
//   element.innerHTML = "Hello h2 world";
//   return element;
// }

// module.exports = generateText;

// 采用es6模块规范
export default function () {
  var element = document.createElement('h2');
  element.innerHTML = "我叫何金昊";
  return element;
}