import React from 'react'
import '../css/Payment.css'
import MasterCard from '../assets/image/Rectangle 15 (2).png'
import Visa from '../assets/image/Rectangle 17 (2).png'
import PayPal from '../assets/image/Rectangle 20 (2).png'
import Cash from '../assets/image/CASH ON DELIVERY.png'
import { useNavigate } from 'react-router-dom';
import { useCart } from "../contexts/Cart";
const Payment = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const handleConfirmPayment = () => {
    // Clear cart items from local storage
    localStorage.removeItem('cartItems'); // Adjust this key if your local storage key is different
    // Clear the cart context if necessary
    clearCart();

    // Redirect to the home page
    navigate('/');
  };
  return (
    <div className='payment'>
       <div className="" style={{display: 'flex', justifyContent:'start', width:'100%'}}>
       <h2 >Payment Method</h2>
       </div>
        <form>
    <label className="custom-radio">
      <div className="radios">
      <input type="radio" name="option" value="1" />
      <span class="radio-btn"></span>
      </div>
      <div className="image">
      <img src={MasterCard} alt="" />
      </div>
    </label>
    <label className="custom-radio">
      <input type="radio" name="option" value="2" checked/>
      <span class="radio-btn"></span>
      <div className="image">
      <img src={Visa} alt="" />
      </div>
    </label>
    <label className="custom-radio">
      <input type="radio" name="option" value="3"/>
      <span class="radio-btn"></span>
      <div className="image">
      <img src={PayPal} alt="" />
      </div>
    </label>
    <label className="custom-radio">
      <input type="radio" name="option" value="3"/>
      <span class="radio-btn"></span>
      <div className="image">
      <img src={Cash} alt="" />
      </div>
    </label>
  </form>
  <div className="atm">
    <div className="atms">
    <p>Card Number*</p>
    <input type="text"  />
    </div>
    <div className="atms">
    <p>Card Holder*</p>
    <input type="text"/>
    </div>
    <div className="atms">
    <p>Expiry Date*</p>
    <select name="" id="">
        <option value="">Month</option>
    </select>
    <select name="" id="">
        <option value="">Year</option>
    </select>
    </div>
    <div className="atms">
    <p>CVV</p>
    <input type="text"/>
    <span className='italic'>i</span>
    </div>
  </div>
  <div className="" style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'10px'}}>
    <div className='box'></div>
    <p>Save details for future purchases</p>
  </div>
  <div className="">
    <button className='confirm' onClick={handleConfirmPayment}>
        CONFIRM PAYMENT
    </button>
  </div>
    </div>
  )
}

export default Payment