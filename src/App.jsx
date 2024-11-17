import Landingpage from './stores/pages/Landingpage'
import { Routes, Route } from 'react-router-dom'
import Mobilepage from './stores/pages/Mobilepage'
import Computerpage from './stores/pages/Computerpage'
import Fashionpage from './stores/pages/Fashionpage'
import Kitchenpage from './stores/pages/Kitchenpage'
import Tvpage from './stores/pages/Tvpage'
import Cart from './stores/pages/Cart'
import Speakerpage from './stores/pages/Speakerpage'
import Singlemobile from './stores/single/Singlemobile'
import Singlecomputer from './stores/single/Singlecomputer'
import Singlefashion from './stores/single/Singlefashion'
import Singlekitchen from './stores/single/Singlekitchen'


import './App.css'

function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/mobiles' element={<Mobilepage />} />
        <Route path='/computers' element={<Computerpage />} />
        <Route path='/fashion' element={<Fashionpage />} />
        <Route path='/Kitchen' element={<Kitchenpage />} />
        <Route path='/tv' element={<Tvpage />} />
        <Route path='/speakers' element={<Speakerpage />} />
        <Route path='/mobiles/:id' element={<Singlemobile />} />
        <Route path='/computers/:id' element={<Singlecomputer />} />
        <Route path='/fashion/:id' element={<Singlefashion />} />
        <Route path='/kitchen/:id' element={<Singlekitchen />} />




      </Routes>

    </div>
  )
}

export default App
