import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../actions/OrderActions';
import Error from '../Component/Error'
import Loading from '../Component/Loading'

export default function Ordersscreen() {

  const dispatch = useDispatch()
  const orderstate = useSelector(state => state.getUserOrdersReducer)
  const { orders, error, loading } = orderstate

  useEffect(() => {

    dispatch(getUserOrders())

  }, [])

  return (
    <div>
      <h2 style={{ fontSize: '27px', fontWeight: 'bold',marginTop:'3%' }}>My Orders</h2>

      <div className='row justify-content-center'>
        {loading && (<Loading />)}
        {error && (<Error error='Something went wrong' />)}
        {orders && orders.map(orders => {

          return <div className='col-md-8 m-2 p-1' style={{ backgroundColor: '#FFC947', borderRadius: '6px', color: 'black' }}>

            <div className='flex-container'>

              <div className='text-left w-100 m-2'>
                <h2 style={{ fontSize: '20px', textAlign: 'center' }}>Items</h2>
                <hr />
                {orders.orderItems.map(item => {
                  return <div>
                    <h1 style={{ fontSize: '14px' }}>{item.name} [{item.varient}] * {item.quantity} = {item.price}</h1>
                  </div>
                })}

              </div>

              <div className='text-left w-100 m-2'>
                <h2 style={{ fontSize: '20px', textAlign: 'center' }}>Address</h2>
                <hr />
                <h1 style={{ fontSize: '14px' }} >Street : {orders.shippingAddress.street}</h1>
                <h1 style={{ fontSize: '14px' }} >City : {orders.shippingAddress.city}</h1>
                <h1 style={{ fontSize: '14px' }} >Country : {orders.shippingAddress.country}</h1>
                <h1 style={{ fontSize: '14px' }} >Pincode : {orders.shippingAddress.pincode}</h1>
              </div>

              <div className='text-left w-100 m-2'>
                <h2 style={{ fontSize: '20px', textAlign: 'center' }}>Order Info</h2>
                <hr />
                <h1 style={{ fontSize: '14px' }} >Order Amount : {orders.orderAmount}</h1>
                <h1 style={{ fontSize: '14px' }} >Date : {orders.createdAt.substring(0, 10)}</h1>
                <h1 style={{ fontSize: '14px' }} >Transaction Id : {orders.transactionId}</h1>
                <h1 style={{ fontSize: '14px' }} >Order Id : {orders._id}</h1>
              </div>

            </div>


          </div>

        })}
      </div>

    </div>
  );
}
