<template>
    <header-component title="리스트 페이지"></header-component>
    <div>
        리스트 컨텐츠
        <ul>
            <li v-for="(memo, index) in list" :key="index" @click="setReadMemo(index)">{{index}} : {{memo}}</li>
        </ul>
    </div>
    <footer-component></footer-component>
</template>

<script>
    export default {
  components: { },
        props : {
            list : { // 배열로 받아와야함
                type : Array,
                default : []
            },
            setReadMemo : { //부모가 만든 함수의 정보를 체크하기 위한 검증 단계
                type : Function
            }
        }
    }
</script>

<style scoped>

</style>