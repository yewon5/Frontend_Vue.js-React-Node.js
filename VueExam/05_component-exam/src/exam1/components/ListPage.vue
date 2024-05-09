<template>
    <div class="test1">
        <!-- 케밥 방식으로 컴퍼넌트 태그 사용 -->
        <list-header></list-header>
        <div>리스트 페이지입니다.</div>
        <list-footer></list-footer>
    </div>
</template>

<script>
/* 지역 컴퍼넌트 */
import ListFooter from './ListFooter.vue'
import ListHeader from './ListHeader.vue'

export default {
  components: { 
    ListHeader, 
    ListFooter 
  },
}
</script>


ListHeader<style>
    .test1 {font-size: 20px;}
</style>