 import React, { useReducer } from "react"
import { createContext } from "react"


export const cartStateContext=createContext(null)
 export const cartDispatchContext=createContext(null)


const initialState={
    cart:[]
}
 export function cartReducer(state,action){
    switch(action.type){
        case'Add_to_cart':
        return{
            ...state,cart:[...state.cart,action.value]
        }
        case 'remove':
            const newCart=[...state.cart]
           const updatedcart= newCart.filter(item=>item.id!==action.value.id)
           console.log(newCart,updatedcart)
            return{
                ...state,
                cart:updatedcart
            }

        default: 
        return state

    }
}

 export function CartProvider({children}){
    const [state,dispatch]=useReducer(cartReducer,initialState)

    return(
        <cartStateContext.Provider value={state}>
            <cartDispatchContext.Provider value={dispatch}>
                {children}

            </cartDispatchContext.Provider>
        </cartStateContext.Provider>
    )
}

