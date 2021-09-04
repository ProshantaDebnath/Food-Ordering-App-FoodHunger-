import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { deliverOrder, getAllOrders } from '../actions/OrderActions';
import Error from '../Component/Error'
import Loading from '../Component/Loading'

export default function Orderslist() {

  const dispatch = useDispatch()
  const getordersstate = useSelector(state => state.getAllOrdersReducer)
  const { loading, error, orders } = getordersstate

  useEffect(() => {

    dispatch(getAllOrders())

  }, [])

  return (
    <div>
      <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>Orders List</h2>

      {loading && (<Loading />)}
      {error && (<Error error='Something went wrong' />)}

      <table className='table table-striped table-bordered table-responsive-sm'>

        <thead className='thead-dark'>
          <tr style={{textAlign:'center'}}>
            <th>Order Id</th>
            <th>Email</th>
            <th>User Id</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders && orders.map(order => {
            return <tr>
              <td style={{textAlign:'center'}} >{order._id}</td>
              <td style={{textAlign:'center'}} >{order.email}</td>
              <td style={{textAlign:'center'}} >{order.userid}</td>
              <td style={{textAlign:'center'}} >{order.orderAmount}</td>
              <td style={{textAlign:'center'}} >{order.createdAt.substring(0, 10)}</td>
              <td style={{textAlign:'center'}} >

                  {order.isDelivered ? (<h1 style={{ fontSize: '16px'}}>Delivered</h1>) :
                  (<button className='btn btn-sm' onClick={()=>{dispatch(deliverOrder(order._id))}}>Deliver</button>)}

              </td>
            </tr>
          })}
        </tbody>

      </table>

    </div>
  );
}
