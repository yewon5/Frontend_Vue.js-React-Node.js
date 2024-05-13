<template>
    <div class="parent">
        Parent 컴포넌트
        <div>
            <p>data.count = {{count}}</p>
            <p>props.prop = {{prop}}</p>
        </div>
        <div>
            <button @click="count++"> data 변경 </button>
            <button @click="prop++"> props 변경 </button>
        </div>
        <child-component :prop="prop"></child-component>
    </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'
    export default {
    components: { ChildComponent },
        data() {
            return {
                count: 0, prop: 0
            }
        }
    }
</script>

<style scoped>
    .parent {
        border : 1px solid royalblue;
        margin : 10px;
    }
</style>