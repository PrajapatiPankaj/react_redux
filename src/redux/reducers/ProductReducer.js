import {ActionTypes} from '../constants/action-types'

const initialState ={
        producs:[{
            id:1,
            title:"sanjay",
            category:"programmer"
        }]
}

export const productReducer =(state=initialState,{type,payload}) =>{
        switch (type) {
            case ActionTypes.SET_PRODUCTS:
                 return state
        
            default:
                return state
            
        }

}