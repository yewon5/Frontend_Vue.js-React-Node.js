<template>
<!--
  <my-button class="mycss" style="color:red">
    MyButton
  </my-button>  버튼태그는 아니지만 웹에는 버튼처럼 보여짐, 텍스트는 <slot>태그 안에 들어감
  -->
  <my-button>
    <template v-slot:text>
      <span>MyButton</span>
    </template>
    <template #icon>
      <span>(A) </span>
    </template>
  </my-button> 
</template>


<script>
import MyButton from './components/MyButton.vue'


export default {
  name: 'App',
  components: {
    MyButton

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
