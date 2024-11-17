import React from 'react'
import { useParams } from 'react-router-dom'
import { kitchenData } from '../data/kitchen';
import Navbar from '../components/Navbar';
import { cartDispatchContext} from '../context/context'
import { useContext } from 'react';

const Singlekitchen = () => {
    const {id}=useParams;
    const Product=kitchenData.find((item)=>item.id==id)
    const dispatch=useContext(cartDispatchContext)

  return (
    <>
    <Navbar></Navbar>
    {
        Product?(
            <div className="single-page">
            <div className="single-image">
                <img src={Product.image} alt="" />
            </div>
            <div className="single-desc">
                <p>{Product.company}</p>
                <p>{Product.description}</p>
                <p>{Product.price}</p>
                <button onClick={()=>dispatch({type:'Add_to_cart',
                                value:{
                                    id:product.id,
                                    image:product.image,
                                    price:product.price

                                }})}>Add to cart</button>

            </div>
        </div>

        ):(
            <p>item not found</p>
        )
    }

    </>
  )
}

export default Singlekitchen