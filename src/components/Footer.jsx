import React from 'react'
import '../css/Footer.css'
import Icon1 from '../assets/image/Vector (2).png'
import Icon2 from '../assets/image/Group.png'
import Icon3 from '../assets/image/Vector (3).png'
import Arrow from '../assets/image/Right-Arrow 1.png'


const Footer = () => {
  return (
    <div className='footer'>
        <a href='/' className="arrow">
            <img src={Arrow} alt="" />
        </a>
        <div className="group">
            <div className="div">
                <img src={Icon1} alt="" className='img'/>
                <span>PRODUCTS</span>
            </div>
            <div className="div2">
                <img src={Icon2} alt="" className='img'/>
                <span>JOIN TIMBU CLOUD</span>
            </div>
            <div className="div3">
                <img src={Icon3} alt="" className='img'/>
                <span>CONTACT</span>
            </div>
        </div>
        <div className="text">
            <p>For your orders and enrolment, you can call or Whastapp</p>
            <p>Favour Adiatu on (+234) 81 1341 7773</p>
            <p>Surulere, Lagos,</p>
            <p>Nigeria</p>
            
        </div>
    </div>
  )
}

export default Footer