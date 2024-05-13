<template>
    <header-component title="읽기 페이지"></header-component>
    <div>
        <ul>
            <p>선택된 메모 = {{currentMemo}}</p>
        </ul>
    </div>
    <footer-component></footer-component>
</template>

<script>
    export default {
        props : {
            currentMemo : { // current-memo 특수기호가 들어가면 카멜표기법으로 작성
                type : String,
                default : ""
            }
        }
    }
</script>

<style scoped>

</style>