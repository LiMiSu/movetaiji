let html = document.querySelector("#html");
let n = 0;
let string = `/*你好，
我是一名前端新人，
接下来我要演示一下我的前端功底了，
首先我要准备一个div：
*/

#div1{
    border: 1px solid red;
}







/* 接下来我要把 div 变成一个八卦图，
注意看好了！
首先，把 div 变成一个园
*/

#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}









/* 八卦是阴阳形成的
一黑一白
这次用一个高级的方法：背景渐变，去https://cssgradient.io/试试吧！
*/

#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}









/*
开始加小圆啦
*/

#div1::before {
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after {
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let style = document.querySelector("#style");
let step = () => {
    setTimeout(() => {
        let string2 = [];
        let isEnter = string[n] === "\n";
        let isEmpty = string[n] === " ";
        if (isEnter) {
            string2 += "<br>";
        } else if (isEmpty) {
            string2 += "&nbsp";
        } else {
            string2 += string[n];
        }
        html.innerHTML += string2;
        style.innerHTML += string[n];
        window.scrollTo(0,9999);//防止页面太长看不到文字，够大就行
        html.scrollTo(0,99999);//?
        n = n + 1;
        if (n < string.length) {
            step();
        };
    }, 10)
}
step();