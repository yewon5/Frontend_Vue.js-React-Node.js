<template>
    <div class="child">
        Child 컴포넌트
        <div>
            입력 값 : <input type="text" v-model="value" ref="input1"/>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {value : "sample"}
        }
    }
</script>

<style scoped>
    .child {
        border : 1px solid rosybrown;
        margin : 10px;
    }
</style>