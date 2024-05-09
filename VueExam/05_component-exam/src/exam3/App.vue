<template>
  <img alt="Vue logo" src="../assets/logo.png">
  <h1>컴퍼넌트 데이터 바인딩</h1>
  <hr/>
  <div id="app">
    <list-page v-bind:list="list"></list-page><br>
  </div>
</template>

<script>
import ListPage from './components/ListPage'

export default {
  name: 'App',
  components: {
    ListPage
  },
  data(){
    return { list : ["memo1", "memo2", "memo3", "memo4"] }
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
