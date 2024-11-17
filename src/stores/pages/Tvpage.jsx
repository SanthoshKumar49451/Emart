import React from 'react'
import { tvData } from '../data/tv'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Tvpage = () => {
  return (

    <>
      <Navbar />
      <div className='pages'>
        {
          tvData.map((item) => {
            return (
              <div className='items' key={item.id}>

                <div className="items-img">
                  <img src={item.image} alt="" />
                </div>


                <div className="items-details">
                  <p>{item.company}{" "}{item.model}</p>
                </div>

              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Tvpage