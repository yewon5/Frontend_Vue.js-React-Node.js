const fs = require("fs")

const content = "안녕하세요~~ Mr.monkey"

//동기식 처리
fs.writeFileSync('./hello.txt', content);
const data = fs.readFileSync('./hello.txt', "utf-8");
console.log(data)
