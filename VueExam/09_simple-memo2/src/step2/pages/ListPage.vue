<template>
    <header-component title="리스트 페이지"></header-component>
    <div>
        리스트 컨텐츠
        <ul>
            <li v-for="(memo, index) in list">index{{index}} : {{memo}}</li>
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
            }
        }
    }
</script>

<style scoped>

</style>