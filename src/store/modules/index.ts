import { Module } from "vuex"
import { IGlobalState } from ".."
import { IArticles, IIndexState } from "../../interface/index"
import * as Types from '../types'
import { getArticles } from '../../api/index'
const state: IIndexState = {
    articles: {
        total: 0,
        list: [],
    },
    params: {
        pageInfo: {
            pageNum: 1,
            pageSize: 10
        },
        filterInfo: {
            keywords: ''
        }
    }
}
const index: Module<IIndexState, IGlobalState> = {
    namespaced: true,
    state,
    mutations: {
        [Types.SET_ARTICLE_LIST](state, payload: IArticles) {
            state.articles.total = payload.total
            state.articles.list = [...payload.list]
        },
        [Types.SET_PARAMS](state, payload: { pageInfo: { pageNum: number, pageSize: number }, filterInfo?: {} }) {
            state.params = payload
        },
    },
    actions: {
        async [Types.SET_ARTICLE_LIST]({ commit }) {
            let articles = await getArticles(state.params);
            commit(Types.SET_ARTICLE_LIST, articles)
        }
    }
}
export default index
