import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartActions'
import { deleteFromCart } from '../actions/cartActions';
import Checkout from '../Component/Checkout';
import './StyleCSS/Cartscreen.css';


export default function Cartscreen() {

  const cartstate = useSelector(state => state.cartReducer)
  const cartItems = cartstate.cartItems
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0)
  const dispatch = useDispatch()

  return (
    <div>
      <div className="row justify-content-center" style={{marginTop:'3%'}}>
        <div className="col-md-6">
          <h1 style={{ fontSize: '30px' }}>My Cart</h1>

          {cartItems.map(item => {
            return <div className="container-fluid">

              <div className="text-left m-1">
                <hr />
                <h1 style={{ fontSize: '18px' }} ><strong>{item.name}[{item.varient}]</strong></h1>
                <h1 style={{ fontSize: '16px' }} >Price: {item.quantity} * {item.prices[0][item.varient]} = {item.price} /-</h1>
                <h1 style={{ fontSize: '16px' }} >Quantity :  
                  <i className="fa fa-plus-square" aria-hidden="true" onClick={() => { dispatch(addToCart(item, item.quantity + 1, item.varient)) }}></i>
                  <b>  {item.quantity}  </b>
                  <i className="fa fa-minus-square" aria-hidden="true" onClick={() => { dispatch(addToCart(item, item.quantity - 1, item.varient)) }}></i>
                </h1>
              </div>

              {/* <div className='m-1 w-100'>
                <img src={item.image} style={{ height: "90px", width: '90px' }} alt='...'/>
              </div> */}

              <div className='buttonclass'>
                <button className='btn btn-sm' onClick={() => dispatch(deleteFromCart(item))}>Delete</button>
              </div>

            </div>
          })}

        </div>
        <div className="col-md-4">
          <h1 style={{fontSize:'30px',fontWeight:'bold',textAlign:'center'}}>Total Price: {subtotal}/-</h1>
          <Checkout subtotal={subtotal} />

        </div>
      </div>
    </div>
  );
}

