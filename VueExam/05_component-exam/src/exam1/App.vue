<template>
  <img alt="Vue logo" src="../assets/logo.png">
  <h1>로컬 컴퍼넌트</h1>
  <hr/>
  <div id="app">
    <list-page></list-page><br>
  </div>
</template>

<script>
/* 지역 컴퍼넌트 */
import ListPage from './components/ListPage'

export default {
  name: 'App',
  components: {
    ListPage
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
