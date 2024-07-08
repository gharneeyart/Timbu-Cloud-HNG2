import React from 'react'
import Delivery from '../components/Delivery'
import Payment from '../components/Payment'
import '../css/CheckOut.css'
import Navbar from '../components/Header'


const CheckOut = () => {
  return (
    <>
      <Navbar />
    <div className='checkout'>
      
        <div className="details">
            <Delivery/>
        </div>
        <div className="method">
            <Payment/>
        </div>
    </div>
    </>
  )
}

export default CheckOut