export default {
    namespace: 'menu',
    state: {
        menuList: [],
        selected: 'menu.welcome'
    },
    reducers: {
        update(state,{payload}){
            return {
                ...state,
                menuList: payload
            }
        },
        select(state,{payload}){
            return {
                ...state,
                selected: payload
            }
        }
    }
}

// tabList?: TabPaneProps[];
// tabActiveKey?: TabsProps['activeKey'];
// onTabChange?: TabsProps['onChange'];