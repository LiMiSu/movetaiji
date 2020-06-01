let html = document.querySelector("#html");
let n = 0;

// demo.innerHTML = n;
// setInterval(() => {//老手不用setInterval()
//     n = n + 1;
//     demo.innerHTML = n;
// }, 1000);

//老手用递归的setTimeout()---通过setTimeout()模拟setInterval()，好处就是可以随时停止
//思路：
// let step = () => {
//     setTimeout(() => {
//         n = n + 1;
//         demo.innerHTML = n;
//         if (n <= 10) {
//             step();
//         } else {
//
//         }
//     },1000)
// }
// step();
// let string = '你好，我是一名前端新人。';
// // demo.innerHTML = string[n];
// let step = () => {
//     setTimeout(() => {
//         demo.innerHTML += string[n];
//         n = n + 1;
//         if (n < string.length) {
//             step();
//         };
//     }, 400)
// }
// step();

//加点东西
// let string = `你好，
// 我是一名前端新人，
// 接下来我要加样式了，
// 我要加的样式是：
// body{
//     color: red;
// }
// `;
// string = string.replace(/\n/g, "<br>");//这是一个符号一个字读的，读到标签的第一个尖括号是还没形成完整标签就不会形成html语法就会打印出<。所以行不通
// let step = () => {
//     setTimeout(() => {
//         demo.innerHTML = string.substring(0,n);
//         console.log(demo.innerHTML);
//         n = n + 1;
//         if (n < string.length) {
//             step();
//         };
//     }, 1000)
// }
// step();

// //改良
// let string = `你好，
// 我是一名前端新人，
// 接下来我要加样式了，
// 我要加的样式是：
// body{
//     color: red;
// }
// `;
// let step = () => {
//     setTimeout(() => {
//         let string2 = [];
//         let isEnter = string[n] === "\n";
//         let isEmpty = string[n] === " ";
//         if (isEnter) {
//             string2 += "<br>";
//         } else if (isEmpty) {
//             string2 += "&nbsp";
//         } else {
//             string2 += string[n];
//         }
//         html.innerHTML += string2;
//         n = n + 1;
//         if (n < string.length) {
//             step();
//         };
//     }, 100)
// }
// step();

//改良 同时改变CSS样式  得加注释了
// let string = `/*你好，
// 我是一名前端新人，
// 接下来我要加样式了，
// 我要加的样式是：*/
// body{
//     color: red;
// }
// `;
// let style = document.querySelector("#style");
// let step = () => {
//     setTimeout(() => {
//         let string2 = [];
//         let isEnter = string[n] === "\n";
//         let isEmpty = string[n] === " ";
//         if (isEnter) {
//             string2 += "<br>";
//         } else if (isEmpty) {
//             string2 += "&nbsp";
//         } else {
//             string2 += string[n];
//         }
//         html.innerHTML += string2;
//         style.innerHTML += string[n];
//         n = n + 1;
//         if (n < string.length) {
//             step();
//         };
//     }, 100)
// }
// step();


//改良 同时改变CSS样式  得加注释了