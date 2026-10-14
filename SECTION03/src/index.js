// const moduleData = require("./math");
// const {add, sub} = require("./math");

//ES모듈은 꼭 확장자까지
import mul, { add, sub } from "./math.js"

//라이브러리는 이름만 명시하면 된다
import randomColor from "randomcolor"

// console.log(moduleData.add(1,2));
// console.log(moduleData.sub(3,1));

console.log(add(1, 2));
// console.log(sub(3, 1));
// console.log(mul(2, 2));

const color = randomColor();
console.log(color);