import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { cartStateContext } from '../context/context'

const Navbar = () => {
  const state=useContext(cartStateContext)
const cartItemsCount=state.cart.length;


  return (
   <>
    <div className="nav-section">
        <div className="title">
            <span>E-mart</span>
        
        </div>
        <div className="search">
            <input type="text"  placeholder='Search Here.....'/>
        </div>
        <div className="user">
          <div className="user-detail">
            <span>Log in</span>
          </div>
          <Link to={`/cart`}>
          <div className="cart">
            cart   <span>{cartItemsCount}</span>
          </div>
          </Link>
        
        </div>
    </div>

    <div className="subMenu">
      <ul>
        <Link to='/mobiles'>
        <li>Mobiles</li>
        </Link>
        <Link to='/computers'>
        <li>Computers</li>
        </Link>
      <Link to='/fashion'>
      <li>Fashion</li>
      </Link>
      <Link to='/kitchen'>
      <li>Kitchen</li></Link>
        
        <Link to='/speakers'>
        <li>Speaker</li>
        </Link>
       
       <Link to='/tv'>
       <li>Tv</li>
       </Link>
      </ul>
    </div>
   </>
  )
}

export default Navbar