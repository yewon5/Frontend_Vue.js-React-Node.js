let who = process.argv[2]; //node[0] test.js[1] 홍길동[2] 
let greeting = `${who} Hello!` //명령행 인자
console.log(greeting); //홍길동 Hello!
//$ node test.js 홍길동