import {ActionTypes} from "../contacts/action-types";

export const setProducts = (products) =>{
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload:products,
    };
}
export const selectedProducts = (products) =>{
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload:products,
    };
}

export const removeSelectedProduct = () =>{
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
        
    };
}