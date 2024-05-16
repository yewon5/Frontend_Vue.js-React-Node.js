<template>
    <div class="parent">
        Parent 컴포넌트
        <child-component ref="child"></child-component>
    </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'

    export default {
        components: { ChildComponent },
        data() {
            return {  }
        },
        methods : {

        }
    }
</script>

<style scoped>
    .parent {
        border : 1px solid royalblue;
        margin : 10px;
    }
</style>