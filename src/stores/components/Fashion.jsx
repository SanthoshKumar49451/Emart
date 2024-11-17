import React from 'react'
import { menData } from '../data/men'

const Fashion = () => {
    const firstFiveImages = menData.slice(0, 5)
    return (
        <>
            <div className='pro-title'>
                <h2>
                    Men Wear
                </h2>
                <div className='pro-section'>
                    {
                        firstFiveImages.map((item) => {


                            return (
                                <div className='item-img'>
                                    <img src={item.image} alt="" />
                                </div>
                            )

                        })

                    }
                </div>
            </div>


        </>
    )
}

export default Fashion