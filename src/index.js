import './css/style.css'
import MyImg from './img/img1.gif'
import {hello} from './utils.js'

function component() {
  let element = document.createElement('div');
 
   // 将图像添加到我们现有的 div。
   let Img = new Image();
   Img.src = MyImg;
 
   element.appendChild(Img);
 
  return element;
}
 
document.body.appendChild(component());

let arr = [1, 2, 3];
console.log([...arr]);

console.log("asdasd");

hello();