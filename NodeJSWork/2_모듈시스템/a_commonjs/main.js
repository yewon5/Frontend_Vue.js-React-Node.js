//모듈을 가져다 쓰기 위한 메인
//require를 사용하여 function.js에 있는 모듈 불러오기
//$ node main.js
const { HelloWorld } = require("./function.js")
const myLog = require("./log.js") //module.exports = log; 내보낼때랑 똑같이 중괄호 쓰면 안됨


HelloWorld(); //Hello World
myLog.info('Node.js started...')