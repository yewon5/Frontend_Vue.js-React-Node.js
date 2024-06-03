function HelloWorld() {
    console.log("Hello World");
}

// module.exports = {Hello : HelloWorld} // 다른 이름으로 내보낼경우 키와 값으로 내보내고 {밖에 보여질 이름 : 실제 함수 이름}, 생략하고 함수 앞에 export로 내보내도 됨
module.exports = {HelloWorld} // 이름이 같을 경우 줄여쓸 수 있음