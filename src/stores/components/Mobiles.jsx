import React from 'react'
import { mobileData } from '../data/mobiles'

const Mobiles = () => {
    const firstFiveImages = mobileData.slice(0, 5)
    return (


        <>
            <div className='pro-title'>
                <h2>
                    Mobiles
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

export default Mobiles