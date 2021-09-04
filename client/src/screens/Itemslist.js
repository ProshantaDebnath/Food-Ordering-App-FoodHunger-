import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Error from '../Component/Error'
import Loading from '../Component/Loading'
import { deleteItem, getAllFoods } from '../actions/foodActions';


export default function Itemslist() {

  const dispatch = useDispatch()

  const foodsstate = useSelector(state => state.getAllFoodsReducer)

  const { pizzas, error, loading } = foodsstate

  useEffect(() => {
    dispatch(getAllFoods())
  }, [])

  return (
    <div>
      <h2 style={{ fontSize: '22px', fontWeight: 'bold' }}>Items List</h2>
      {loading && (<Loading />)}
      {error && <Error error='Something went wrong' />}

      <table className='table table-light table-striped table-bordered table-responsive-sm'>

        <thead className='thead-dark'>

          <tr style={{textAlign:'center'}} >
            <th>Name</th>
            <th>Prices</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>

        </thead>
        <tbody>
          {pizzas && pizzas.map(food => {

            return <tr>
              <td style={{textAlign:'center'}}>{food.name}</td>
              <td style={{textAlign:'center'}}>
                Half : {food.prices[0]['Half']} <br />
                Full : {food.prices[0]['Full']} <br />
              </td>
              <td style={{textAlign:'center'}}>{food.category.toUpperCase()}</td>
              <td style={{textAlign:'center'}}>
                <button className='m-2'
                  style={{ color: 'white', background: 'red',textAlign:'center' }}
                  onClick={()=>{dispatch(deleteItem(food._id))}}>
                  Delete</button>
                {/* <button className='m-2' style={{ color: 'white', background: '#7C83FD' }}>Edit</button> */}
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}
