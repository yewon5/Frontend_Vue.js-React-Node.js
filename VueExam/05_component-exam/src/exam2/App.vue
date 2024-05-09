<template>
  <img alt="Vue logo" src="../assets/logo.png">
  <h1>전역 컴퍼넌트</h1>
  <hr/>
  <div id="app">
    <list-page></list-page><br>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
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
