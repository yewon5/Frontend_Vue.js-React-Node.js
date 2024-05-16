<template>
  <h1>특정 태그 참조하기</h1>
  <div>
    <button @click="getCount1">1번째 count값 알아내기</button>
    <button @click="getCount2">2번째 count값 알아내기</button>
    <button @click="getinput1">input1 포커스 이동</button>
  </div>
  <div>
    <sample-component ref="sam1"></sample-component>
    <sample-component ref="sam2"></sample-component>
  </div>
  <div>
    <parent-component ref="parent"></parent-component>
    <!-- 부모컴포넌트로 가서 child도 ref 걸어준다 -->
  </div>

</template>

<script>
import ParentComponent from './components/ParentComponent.vue'
import SampleComponent from './components/SampleComponent.vue'

export default {
  name: 'App',
  components: {
    ParentComponent,
    SampleComponent
  },
  methods : {
    getCount1(){
      //첫번째 SampleComponent의 count값 출력
      console.log(this.$refs) //콘솔로 어떤 속성에 접근 가능한지 확인. count:1 값으로 접근 가능
      console.log(this.$refs.sam1.count)
    },
    getCount2(){
      //두번째 SampleComponent의 count값 출력
      console.log(this.$refs.sam2.count)
    },
    getinput1(){
      //Text에 focus주기 : focus()함수 이용
      console.log(this.$refs.parent.$refs.child.$refs.input1.focus())
      this.$refs.parent.$refs.child.$refs.input1.value = "안녕하세요";
    },
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
