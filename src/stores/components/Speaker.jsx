import React from 'react'
import { speakerData } from '../data/speaker'

const Speaker = () => {
    const firstFiveImages=speakerData.slice(0,5)
  return (
    <>
    <h2>Speaker</h2>
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

    </>
  )
    }

export default Speaker