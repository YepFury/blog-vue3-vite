<template>
    <div class="index">
        <IndexHeader></IndexHeader>
        <router-view class="w1000"></router-view>
    </div>
</template>
<style lang="scss">
    .index {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .w1000 {
        flex: 1;
        width: 1000px;
        margin: 0 auto;
    }
</style>
<script lang="ts">
    import { defineComponent } from "vue";
    import IndexHeader from "./index-header.vue";
    export default defineComponent({
        components: {
            IndexHeader,
        },
        setup() {},
    });
</script>
