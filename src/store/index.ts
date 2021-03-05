import { createStore } from 'vuex'
import { IIndexState } from '../interface';
import index from './modules/index'
export interface IGlobalState {
    index: IIndexState
}

const store = createStore<IGlobalState>({
    modules: {
        index
    }
})

export default store;