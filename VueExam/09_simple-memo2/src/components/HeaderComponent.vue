<template>
    <div>
        <div class="header">
            <h3>{{title}}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        props : {
            title : {
                type : String,
                default : ""
            }
        }
    }
</script>

<style scoped>
    .header {
        height: 40px;
        background-color:cadetblue;
    }
</style>