<template>
  <!-- <h1 id="hello">Hello World!</h1> -->
  <h1 ref="hello">Hello World!</h1>
  <hello ref="hello2"></hello>
</template>


<script>
import Hello from './components/Hello.vue'

export default {
  name: 'App',
  components: {
    Hello
    
  },
  mounted(){
    //id="hello" js로 접근
    //const h1 = document.querySelector("#hello");
    //console.log(h1.textContent); 

    //ref="hello" vue로 접근
    console.log(this.$refs.hello.textContent); //hello: h1 참조키 확인

    //<<hello>컴포넌트 참조
    console.log(this.$refs.hello2.$refs.good.textContent)
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
