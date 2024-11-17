import React from 'react'
import { kitchenData } from '../data/kitchen'

const Kitchen = () => {
  const firstFiveImages = kitchenData.slice(0, 5)
  return (
    <>
      <div className='pro-title'>
        <h2>Kitchen</h2>
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

export default Kitchen