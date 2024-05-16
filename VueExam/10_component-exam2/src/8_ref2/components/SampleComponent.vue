<template>
    <div class="sample" @click="addCount">
        {{count}}
    </div>
</template>

<script>
    export default {
        data(){
            return { count : 1 }
        },
        methods : {
            addCount(){
                this.count++;
            }
        }
    }
</script>

<style scoped>
    .sample {
        border: 1px solid black;
        margin: 10px; 
    }
</style>