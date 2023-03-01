const initialState ={
        producs:[{
            id:1,
            title:"sanjay",
            category:"programmer"
        }]
}
    
    


export const productReducer =(state,{type,payload}) =>{
        switch (type) {
            case ActionTypes.setProduct:
                 return state
                break;
        
            default:
                return state
            
        }

}