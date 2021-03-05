export interface IArticle {
    articleid: string,
    articlename: string,
    des: string,
    releasetime: string,
    tags: string[]
}

export interface IArticles {
    total: number,
    list: IArticle[]
}
// let params = {
//     pageInfo: { pageNum: this.pageNum, pageSize: this.pageSize },
//     filterInfo: {
//       keywords: this.searchKey,
//       tag: this.tag,
//       starttime: this.releaseDate().starttime,
//       endtime: this.releaseDate().endtime
//     }
//   }
export interface IIndexState {
    articles: IArticles,
    params: {
        pageInfo: {
            pageNum: number,
            pageSize: number
        },
        filterInfo?: {
            keywords?: string,
            tag?: string,
            starttime?: string,
            endtime?: string,
        }
    }
}