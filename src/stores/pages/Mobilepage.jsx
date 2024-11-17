import React from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'

const Mobilepage = () => {
  return (
  <>
  <Navbar />
  <div className='pages'>
        {
            mobileData.map((item)=>{
                return(
                  
                     <div className='items' key={item.id}>
                         <Link to={`/mobiles/${item.id}`}>
                        <div className="items-img">
                            <img src={item.image} alt="" />
                        </div>
                        </Link>
                        <div className="items-details">
                            <p>{item.company}{' '}{item.model}</p>
                        </div>

                    </div>
               
                )
            })
        }
        </div>
  </>
  )
}

export default Mobilepage