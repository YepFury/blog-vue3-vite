<template>
    <div class="article-content">
        <div class="article-header">
            <el-button class="re-back" @click="handleBack">返回</el-button>
            <h1>
                <span>{{ articlename }}</span>
            </h1>
            <ul class="article-info">
                <li>
                    <label>发布时间：</label>
                    <span style="display: inline-block; width: 120px">{{ releasetime }}</span>
                </li>
                <li>
                    <label>标签：</label>
                    <el-select class="tag-select" v-model="tagValue" :disabled="true">
                        <el-option v-for="item in tags" :key="item" :label="item" :value="item"> </el-option>
                    </el-select>
                </li>
            </ul>
        </div>
        <div class="markdown-container">
            <VueMarkdown class="markdown" :source="articlecontent"></VueMarkdown>
            <!-- <Suspense>
                <template #default>
                    <VueMarkdown class="markdown" :source="articlecontent"></VueMarkdown>
                </template>
                <template #fallback>
                    <div>加载中...</div>
                </template>
            </Suspense> -->
        </div>
    </div>
</template>
<style lang="scss">
    .article-content {
        height: 100%;
        overflow-y: auto;
        position: relative;
        &:hover {
            .edit-list {
                display: block;
            }
        }
        .article-header {
            margin-bottom: 10px;
            border-bottom: 1px solid #ccc;
            position: relative;
            .re-back {
                line-height: 30px;
                padding: 0 20px;
                position: absolute;
                left: 10px;
                top: 10px;
            }
            h1 {
                line-height: 50px;
                text-align: center;
                input {
                    border: 0;
                    outline: none;
                    font-size: 28px;
                    font-weight: 700;
                    text-align: center;
                }
            }
        }
        .article-info {
            li {
                display: inline-block;
                line-height: 30px;
                margin-right: 20px;
            }
        }
        .markdown-container {
            height: calc(100% - 101px);
        }
        .edit-list {
            display: none;
            position: absolute;
            top: 10px;
            right: 20px;
            z-index: 11;
            i {
                cursor: pointer;
                margin-left: 10px;
                font-size: 18px;
                &:hover {
                    color: #409eff;
                }
            }
        }
    }
</style>
<script lang="ts">
    import { defineComponent, onMounted, reactive, toRefs } from "vue";
    import { getArticle } from "../../../api/index";
    import { useRoute } from "vue-router";
    import VueMarkdown from "vue-markdown";
    export default defineComponent({
        components: {
            VueMarkdown,
        },
        setup() {
            const route = useRoute();
            let state = reactive({
                articlecontent: "",
                releasetime: "",
                articlename: "",
                tagValue: [],
            });
            let articleId = route.params.id;
            onMounted(async () => {
                let { articlecontent, releasetime, articlename, tags } = await getArticle(articleId);
                let tagValue = tags.split(",");
                state.articlecontent = articlecontent;
                state.articlename = articlename;
                state.releasetime = releasetime;
                state.tagValue = tagValue;
            });
            console.log(state);
            return {
                ...toRefs(state),
            };
        },
    });
</script>
