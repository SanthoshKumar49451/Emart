import React from 'react'
import { speakerData } from '../data/speaker'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Speakerpage = () => {
  return (
    <>
  <Navbar />
  <div className='pages'>
        {
            speakerData.map((item)=>{
                return(
                    <div className='items' key={item.id}>
                       
                        <div className="items-img">
                            <img src={item.image} alt="" />
                        </div>
                       
                        <div className="items-details">
                            <p>{item.company}{item.model}</p>
                        </div>

                    </div>
                )
            })
        }
        </div>
  </>
  )
}

export default Speakerpage