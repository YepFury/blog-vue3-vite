import axios from './axios'

export function getArticles<T>(params: { pageInfo: { pageNum: number, pageSize: number }, filterInfo?: {} }) {
    return axios.post<T, T>('/selectArticle', params)
}
export function getArticle<T>(id: string) {
    return axios.get<T, T>('/getArticle', { params: { id: id } })
}