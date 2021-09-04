import React, { useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addItem } from '../actions/foodActions';
import Error from '../Component/Error';
import Loading from '../Component/Loading';
import Success from '../Component/Success';

export default function Addnew() {

  const [name, setname] = useState('')
  const [halfprice, sethalfprice] = useState('')
  const [fullprice, setfullprice] = useState('')
  const [image, setimage] = useState('')
  const [description, setdescription] = useState('')
  const [category, setcategory] = useState('')

  const dispatch = useDispatch()

  const additemstate = useSelector(state=>state.addItemReducer)
  const {success, error, loading} = additemstate

  function formHandler(e) {
    e.preventDefault();

    const food= {
      name,
      image,
      description,
      category,
      prices :{
        Half : halfprice,
        Full : fullprice
      }
    }
    console.log(food)
    dispatch(addItem(food))
  }



  return (
    <div>

      <div className='text-left shadow p-3 mb-5 bg-white rounded table-responsive-sm'>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>Add New One</h2>
        
        {loading && (<Loading/>)}
        {error && (<Error error='Something went wrong'/>)}
        {success && (<Success success='Added Successfully'/>)}

        <form onSubmit={formHandler}>
          <input
            className='form-control'
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => {
              setname(e.target.value)
            }} />

          <input
            className='form-control'
            type='text'
            placeholder='Set Half varient price '
            value={halfprice}
            onChange={(e) => {
              sethalfprice(e.target.value)
            }} />

          <input
            className='form-control'
            type='text'
            placeholder='Set Full varient price'
            value={fullprice}
            onChange={(e) => {
              setfullprice(e.target.value)
            }} />

          <input
            className='form-control'
            type='text'
            placeholder='Category'
            value={category}
            onChange={(e) => {
              setcategory(e.target.value)
            }} />

          <input
            className='form-control'
            type='text'
            placeholder='Description'
            value={description}
            onChange={(e) => {
              setdescription(e.target.value)
            }} />

          <input
            className='form-control'
            type='text'
            placeholder='image Url'
            value={image}
            onChange={(e) => {
              setimage(e.target.value)
            }} />

          <button className='btn mt-2' type='submit'>Add Item</button>

        </form>
      </div>

    </div>
  );
}
