// math 모듈

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

export default function multiply(a, b) {
    return a * b;
}

// module.exports = {

//     add : add,
//     sub : sub,

//     값과 value가 같으면 아래와 같이 작성해도 됨
//     add,
//     sub,
// }

export { add, sub };