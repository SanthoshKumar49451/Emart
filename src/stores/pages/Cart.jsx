import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { cartStateContext } from '../context/context'
import './cart.css'
import { cartDispatchContext } from '../context/context'

const Cart = () => {
  const state = useContext(cartStateContext)
  const dispatch = useContext(cartDispatchContext)

  return (

    <>
      <Navbar />

      {state.cart.length == 0 ? (
        <p>No items in cart</p>
      ) : (

        state.cart.map((item) => {
          return (
            <div key={item.id} className='cart'>
              <div className="cart-image">
                <img src={item.image} alt="" />
              </div>
              <div className="cart-desc">
                <p>{item.id}</p>

                <p> price:{item.price}</p>
                <button onClick={() => dispatch({
                  type: 'remove',
                  value: {
                    id: item.id,
                    image: item.image,
                    price: item.price

                  }
                })}>Delete</button>
                <button>Buy now</button>

              </div>


            </div>
          )
        })
      )}
    </>
  )
}

export default Cart