<template>
  <my-button @myclk="log" @changeMsg="logMsg">
    MyButton
  </my-button> 
  <!-- 
  변수명이 중요한 이유가 딱 봤을땐 클릭 이벤트로 log함수가 실행되는구나 싶지만 @click은 이벤트 함수가 아니고, 
  MyButton.vue의 div태그에 자동으로 클릭이벤트가 상속되어 MyButton.vue에서 이벤트를 발생하는 것이다.
  다만, 자식 컴포넌트에 태그가 여러개 있으면 어느 태그에 상속해줘야할지 정해주지않았기 때문에 alert이 실행되지 않는다.
  emits : ["myclk"] @click 대신 등록된 이름을 가져다 씀
  @click="$emit('myclk')"
  emits 프로퍼티를 통해서 자식의 데이터를 부모가 받을 수 있다.
  -->
</template>


<script>
import MyButton from './components/MyButton.vue'

export default {
  name: 'App',
  components: {
    MyButton
  },
  methods : {
    log(info){ 
      //info는 어디서 전달 받나? 부모 함수의 매개변수로 데이터를 전달 받음
      //MyButton.vue <h1 @click="$emit('myclk', 'message')">에서 message로 전달 받음
      alert("Click!");
      console.log(info)
      //console.log(this.$event)
    },
    logMsg(msg){
      console.log(msg)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
