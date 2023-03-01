import ActionTypes from '../constants/action-types'

export const setProduct = (product) =>{
    return(
        type: ActionTypes.SET_PRODUCTS,
        payload : product
    )
}

export const selectedProduct = (product) =>{
    return(
        type: ActionTypes.SELECED_PRODUCTS,
        payload : product
    )
}


