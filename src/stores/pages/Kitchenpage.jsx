import React from 'react'
import { kitchenData } from '../data/kitchen'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Kitchenpage = () => {
  return (
    <>
    <Navbar />
    <div className='pages'>
          {
              kitchenData.map((item)=>{
                  return(
                      <div className='items' key={item.id}>
                        <Link to={`/kitchen/${item.id}`}>
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

export default Kitchenpage