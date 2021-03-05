<template>
    <div class="article-list">
        <div class="filters">
            <el-input v-model="keywords" placeholder="请输入关键字查询" @input="handleInput"></el-input>
        </div>
        <ul class="article-container">
            <li class="article-list-item" v-for="article in articles" :key="article.articleid">
                <div>
                    <h3 @click="toArticle(article)">{{ article.articlename }}</h3>
                    <div class="artcile-des">
                        {{ article.des }}
                    </div>
                </div>
                <div class="article-option">
                    <div class="article-tag">
                        <span v-for="tag in article.tags" :key="tag">{{ tag }}</span>
                    </div>
                    <span class="article-time">{{ article.releasetime }}</span>
                </div>
            </li>
        </ul>
        <el-pagination
            class="el-pagination"
            background
            layout="prev, pager, next"
            :total="total"
            @current-change="handlePageNum"
        ></el-pagination>
    </div>
</template>
<style lang="scss">
    .filters {
        display: flex;
        padding: 15px;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #e1e4e8;
        .el-input {
            width: 300px;
        }
    }
    .article-list {
        overflow-y: auto;
    }
    .article-list-item {
        margin-bottom: 5px;
        background-color: #fff;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-bottom: 1px solid #eaecef;
        h3 {
            font-size: 16px;
            color: #0366d6;
            cursor: pointer;
            display: inline-block;
            margin-bottom: 10px;
            &:hover {
                text-decoration: underline;
                color: #1881dc;
            }
        }
        .artcile-des {
            margin-bottom: 10px;
            max-width: 50%;
        }
    }
    .article-tag {
        display: inline-block;
    }
    .article-tag span {
        display: inline-block;
        font-size: 12px;
        margin-right: 15px;
        position: relative;
        padding-left: 15px;
        &::before {
            content: "";
            display: block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            position: absolute;
            left: 0;
            top: 4px;
            border: 1px solid #1b1f231a;
        }
        &:nth-child(1) {
            &::before {
                background-color: #f1e05a;
            }
        }
        &:nth-child(2) {
            &::before {
                background-color: #2c3e50;
            }
        }
        &:nth-child(3) {
            &::before {
                background-color: #e34c26;
            }
        }
        &:nth-child(4) {
            &::before {
                background-color: #b07219;
            }
        }
        &:nth-child(5) {
            &::before {
                background-color: #5a82f1;
            }
        }
        &:nth-child(6) {
            &::before {
                background-color: #e45af1;
            }
        }
    }
    .article-time {
        font-size: 12px;
        color: #9c9d9e;
    }
    .el-pagination {
        text-align: right;
        margin: 10px;
    }
</style>
<script lang="ts">
    import { computed, defineComponent, onMounted, reactive, toRefs } from "vue";
    import { Store, useStore } from "vuex";
    import { IGlobalState } from "../../../store";
    import * as Types from "../../../store/types";
    import debounce from "lodash.debounce";
    import { IArticle } from "../../../interface";
    import { useRouter } from "vue-router";
    function useArticles(store: Store<IGlobalState>) {
        let articles = computed(() => store.state.index.articles.list);
        let total = computed(() => store.state.index.articles.total);
        onMounted(() => {
            store.dispatch(`index/${Types.SET_ARTICLE_LIST}`);
        });
        return {
            articles,
            total,
        };
    }

    export default defineComponent({
        setup() {
            let store = useStore<IGlobalState>();
            let router = useRouter();
            let { articles, total } = useArticles(store);
            let state = reactive({
                keywords: "",
            });
            function handlePageNum(pageNum = 1) {
                store.commit(`index/${Types.SET_PARAMS}`, {
                    pageInfo: {
                        pageNum: pageNum,
                        pageSize: 10,
                    },
                });
                store.dispatch(`index/${Types.SET_ARTICLE_LIST}`);
            }
            const handleInput = debounce((value: string) => {
                store.commit(`index/${Types.SET_PARAMS}`, {
                    pageInfo: {
                        pageNum: 1,
                        pageSize: 10,
                    },
                    filterInfo: {
                        keywords: value,
                    },
                });
                store.dispatch(`index/${Types.SET_ARTICLE_LIST}`);
            }, 200);
            function toArticle(art: IArticle) {
                router.push({
                    name: "Article",
                    path: "/article",
                    params: {
                        id: art.articleid,
                    },
                });
            }
            return {
                articles,
                total,
                handlePageNum,
                ...toRefs(state),
                handleInput,
                toArticle,
            };
        },
    });
</script>
