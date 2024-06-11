//클라이언트에서 할 일
const socket = io();

const form = document.getElementById("form")
const input = document.getElementById("input")
const messages = document.getElementById("messages")

//서버에게 메세지를 보냄
form.addEventListener("submit", (e) => {
    e.preventDefault(); //소켓끼리 통신하기위해서 기본이벤트는 중단
    if(input.value){
        socket.emit("chat message", input.value) //사용자가 클라이언트에게 메세지를 보냄
        input.value = "";
    }
})

//서버로부터 받은 데이터 뿌리기
socket.on("chat message", (msg) => {
    const item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});