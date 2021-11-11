import fakeStoreApi from "../../apis/fakeStoreApi"
import { ActionTypes } from "../constants/action-types"

export const fetchProducts = () => async (dispatch)=>{ 
    const response = await fakeStoreApi.get('/products')
    console.log("response",response)
    dispatch({
        type:ActionTypes.FETCH_DATA,
    })
}

export const fetchProductDesign = ()=> (dispatch)=>{
    dispatch({type:ActionTypes.LOADING})
    setTimeout(()=>{
        dispatch(fetchProducts())
    })
}