<template>
    <VueMarkdown class="markdown" :source="articlecontent"></VueMarkdown>
</template>
<style lang="scss"></style>
<script lang="ts">
    import { defineComponent } from "vue";
    export default defineComponent({
        components: {
            VueMarkdown: () => import("vue-markdown"),
        },
        props: {
            articlecontent: {
                type: String,
                default: "",
                require: true,
            },
        },
        setup() {},
    });
</script>
