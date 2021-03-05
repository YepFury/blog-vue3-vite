<template>
    <router-view></router-view>
</template>
<style lang="scss">
    html,
    body,
    #app {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "App",
    });
</script>
