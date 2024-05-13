<template>
    <div class="child">
        Child 컴포넌트
        <div>
            <p>data.count = {{count}}</p>
            <p>props.prop = {{prop}}</p>
        </div>
        <div>
            <button @click="count++"> data 변경 </button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return { count: 0 }
        },
        props : {
            prop : {
                type : String,
            }
        }
    }
</script>

<style scoped>
    .child {
        border : 1px solid rosybrown;
        margin : 10px;
    }
</style>