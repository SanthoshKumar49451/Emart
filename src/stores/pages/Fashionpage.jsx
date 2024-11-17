import React from 'react'
import { menData } from '../data/men'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Fashionpage = () => {
  return (
    <>
  <Navbar />
  <div className='pages'>
        {
            menData.map((item)=>{
                return(
                    <div className='items' key={item.id}>
                      <Link to={`/fashion/${item.id}`}>
                      <div className="items-img">
                            <img src={item.image} alt="" />
                        </div></Link>
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

export default Fashionpage