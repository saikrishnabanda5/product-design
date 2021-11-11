import { ActionTypes } from "../constants/action-types"

export const productReducer = (state={},{type})=>{
    switch(type){
        case ActionTypes.FETCH_DATA:
           return {...state,loading:false}

        case ActionTypes.LOADING :
        return {...state,loading:true}

        default:
           return state
    }
}