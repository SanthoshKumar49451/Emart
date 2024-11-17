import React from 'react'
import { useParams } from 'react-router-dom'
import { menData } from '../data/men'
import Navbar from '../components/Navbar'
import { cartDispatchContext } from '../context/context'
import { useContext } from 'react'


const Singlefashion = () => {

    const { id } = useParams()
    const product = menData.find((item) => item.id == id)
    const dispatch = useContext(cartDispatchContext)

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
                            <p>{product.company}</p>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                            <button onClick={() => dispatch({
                                type: 'Add_to_cart',
                                value: {
                                    id: product.id,
                                    image: product.image,
                                    price: product.price

                                }
                            })}
                            >Add to cart</button>

                        </div>

                    </div>
                ) : (
                    <p>Item Not found</p>
                )
            }
        </>
    )

}

export default Singlefashion