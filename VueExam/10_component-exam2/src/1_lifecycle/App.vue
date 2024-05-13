<template>
  <h1>컴포넌트 라이프 사이클 테스트</h1>
  <div>
    <button>컴포넌트 mount</button><br>
    <button>컴포넌트 unmount</button>
  </div>
  <parent-component></parent-component>
</template>

<script>
import ParentComponent from './ParentComponent.vue'


export default {
  name: 'App',
  components: {
    ParentComponent

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
