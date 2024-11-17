import React from 'react'
import { computerData } from '../data/computers'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Computerpage = () => {
  return (
    <>
    <Navbar />
    <div className='pages'>
          {
              computerData.map((item)=>{
                  return(
                    <Link to={`/computers/${item.id}`}>
                          <div className='items' key={item.id}>
                          <div className="items-img">
                              <img src={item.image} alt="" />
                          </div>
                          <div className="items-details">
                              <p>{item.company}{" "}{item.model}</p>
                          </div>
  
                      </div>
                    </Link>
                    
                  )
              })
          }
          </div>
    </>
   
  )
}

export default Computerpage