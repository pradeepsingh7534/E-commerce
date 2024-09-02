import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'Cart',
    initialState : {arrCart:[]},
    reducers : {
        addtoCart : (state, action)=>

        {
            var p = action.payload;
            var p1 = state.arrCart.find((e)=> e.product.id==p.id)
            if(p1){
                p1.quantity = p1.quantity + 1;
            }
            else{
                state.arrCart.push({product:p, quantity:1});

            }
            
            
          },   
            
          Increase: (state, action)=> {
            var p=action.payload;
            var p1= state.arrCart.find((e)=> e.product.id===p.id)
            if(p1){
                p1.quantity = p1.quantity + 1;
            }
          },
        
          Decrease: (state, action)=>{
            var p=action.payload
            var p1= state.arrCart.find((e)=> e.product.id===p.id)
            if(p1){
                if(p1.quantity===1){
                    var i = state.arrCart.findIndex((e)=> e.product.id=== p.id)
                    state.arrCart.splice(i,1)
                }
                else{
                    p1.quantity = p1.quantity -1;

                }

            }

          },
        
    
        removeItem: (state, action)=>
            {
                var id = action.payload;
                state.arrCart = state.arrCart.filter((e)=> e.product.id!== id)
        
            }
        

    }

    

    
})


export default cartSlice.reducer;
export const {addtoCart} = cartSlice.actions;
export var {Increase, Decrease} = cartSlice.actions;
export var {removeItem} = cartSlice.actions;