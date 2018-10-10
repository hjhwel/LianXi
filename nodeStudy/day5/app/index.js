import "./main.scss";
import sub from './sub23';
const app = document.createElement('div');
app.innerHTML = '<h1>扬眉剑出鞘</h1>';
app.appendChild(sub());
document.body.appendChild(app);

let fn = new Promise((resolve, reject) => {
    document.body.appendChild(app);
    let inp = document.createElement("input");
    inp.setAttribute("placeholder","请输入。。。")
    resolve(inp);
}).then((data)=>{
    document.body.appendChild(data);
})
