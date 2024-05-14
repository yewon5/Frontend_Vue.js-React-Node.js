<template>
    <div class="btn" > <!-- :style="$attrs.style" -->
        <!-- <slot> 부분적인 기능 추가, 특정기능을 각각 구분해서 띄움 -->
        <slot name="icon"></slot> 
        <slot name="text"></slot>
    </div>
    <!-- <h1 :class="$attrs.class" :style="$attrs.style">Test</h1> -->
</template>

<script>
    export default {
        inheritAttrs : false,
        created(){
            console.log(this.$attrs)
        }
    }
</script>

<style scoped>
    .btn {
        display: inline-block;
        margin: 4px;
        padding: 6px 12px;
        border-radius: 4px;
        background-color: gray;
        color: white;
        cursor: pointer;
    }
</style>