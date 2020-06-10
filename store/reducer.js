import { DEL, ADD, BUY, UNBUY, CREATE_SHOP_LIST } from './constants';

const defaultState = {
    shoplist: []
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case CREATE_SHOP_LIST:
            return {
                ...state,
                shoplist: action.shoplist
            }
        default: {
            return state
        }
    }
}
export default reducer;