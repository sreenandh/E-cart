import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: 
        []
   ,
    reducers:{
addToCart:(state,action)=>{
    const existingProduct = state.find(item=>item.id==action.payload.id)
    if(existingProduct){
        const remainingProducts=state.filter(item=>item.id!=existingProduct.id)
        existingProduct.quantity ++
        existingProduct.totalPrice = existingProduct.price*existingProduct.quantity
        state=[...remainingProducts,existingProduct]      
    }else{
        state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
    }
},
removeFromCart:(state,action)=>{
    return state = state.filter(item=>item.id!==action.payload)
},
emptyCart:(state)=>{
    return state=[]
}
    }
})


export const {addToCart,removeFromCart,emptyCart} = cartSlice.actions
export default cartSlice.reducer