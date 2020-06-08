import { DEL, ADD, BUY, UNBUY } from './constants';

const defaultState = {
    shoplist: []
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD:
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