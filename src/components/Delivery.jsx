import React from 'react'
import '../css/Delivery.css'

const Delivery = () => {
  return (
    <div className='delivery'>
        <h3>Contact*</h3>
        <div className="names">
            <input type="text" placeholder='Email'/>
            <input type="text" placeholder='Phone Number'/>
        </div>
        <h3>Shipping Information</h3>
        <div className="names">
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='Last Name'/>
        </div>
        <div className="info">
            <select name="" id="" className='region'>
                <option value="">Country</option>
            </select>
            <select name="" id="">
                <option value="">State</option>
            </select>
            <input type="text" placeholder='City'/>
            <input type="text" placeholder='Postal Code'/>
            <input type="text" placeholder='Address'  className='address'/>
        </div>
       
    </div>
  )
}

export default Delivery