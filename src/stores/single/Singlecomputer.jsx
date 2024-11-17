import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { computerData } from '../data/computers'
import Navbar from '../components/Navbar'
import { cartDispatchContext } from '../context/context'

const Singlecomputer = () => {
    const { id } = useParams()
    const product = computerData.find((item) => item.id === id)
    const dispatch=useContext(cartDispatchContext)

    return (
        <>
        <Navbar></Navbar>
            {
                product ? (
                    <div className="single-page">
                        <div className="single-image">
                            <img src={product.image} alt="" />
                        </div>
                        <div className="single-desc">
                            <p>{product.id}</p>
                            <p>{product.company}</p>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                            <button onClick={()=>dispatch({type:'Add_to_cart',
                                value:{
                                    id:product.id,
                                    image:product.image,
                                    price:product.price

                                }})}>Add to cart</button>

                        </div>

                    </div>
                ) : (
                    <p>item not found</p>
                )
            }
        </>
    )
}

export default Singlecomputer

