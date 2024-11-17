import React from 'react'
import { tvData } from '../data/tv'

const Tv = () => {
    const firstFiveImages=tvData.slice(0,5)
  return (
    <>
   <div className='pro-title'>
   <h2>Tv</h2>
    <div className='pro-section'>
        {
            firstFiveImages.map((item)=>{
                return(
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

export default Tv