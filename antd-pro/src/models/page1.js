export default {
    namespace: 'page1',
    state: {
        count: null,
        type: null
    },
    reducers: {
        update(state,{payload}){
            return {
                ...state,
                ...payload
            }
        },
        add(state,_){
            const nc = state.count+1
            return {
                ...state,
                count: nc
            }
        }
    }
}