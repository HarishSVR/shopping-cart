import {ActionTypes} from "../contacts/action-types"

const intialState = {
    product:[
        {
            id:1,
            title:"Harish",
            category:"programmer"
        }
    ]
}

export const productReducer = (state= intialState,{type,payload}) =>{

    switch(type){
        case ActionTypes.SET_PRODUCTS:
        return state;
        default:
            return state;

    }
}