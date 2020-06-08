import { DEL, ADD, BUY, UNBUY, CREATE_SHOP_LIST } from './constants';

export const createShopList = (shoplist) => {  
    return {
        type: CREATE_SHOP_LIST,
        shoplist
    } 
};