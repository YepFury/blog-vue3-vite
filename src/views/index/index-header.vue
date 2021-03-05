<template>
    <div class="index-header">
        <div class="header-container">
            <div class="logo">yBlog</div>
            <el-menu class="el-menu" mode="horizontal">
                <el-menu-item to="/">首页</el-menu-item>
            </el-menu>
        </div>
    </div>
</template>
<style lang="scss">
    .index-header {
        width: 100%;
        height: 60px;
        background-color: #333;
        .header-container {
            width: 1000px;
            height: 100%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .logo {
            font-size: 26px;
            color: #fff;
        }
        .el-menu {
            background-color: #333;
        }
        .el-menu--horizontal>.el-menu-item {
            color: #fff;
        }
        .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
        .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
                color: #fff;
        }
        .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
        .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
        .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
             background-color: #333;
        }
    }
</style>
<script lang="ts">
    import { defineComponent } from "vue";
    export default defineComponent({
        setup() {
            return {};
        },
    });
</script>
