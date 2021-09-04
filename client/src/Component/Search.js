import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { filterFoods } from '../actions/foodActions';

export default function Search() {
    const dispatch = useDispatch()
    const [searchKey, setsearchKey] = useState('')
    const [category , setcategory] = useState('all')
    return (
        <div className='container' style={{boxSizing:'content-box'}}>

            <div className='row justify-content-center mt-4 shadow-lg p-2 mb-4 bg-white rounded'>

                <div className="col-md-3" value={category} onChange={(e)=>{setcategory(e.target.value)}}>
                    <select className='form-control mt-2 w-100'>
                        <option value='all'>All</option>
                        <option value='veg'>Veg</option>
                        <option value='nonveg'>Non-Veg</option>
                    </select>
                </div>

                <div className="col-md-3" style={{ marginLeft: '8px' }}>
                    <input 
                    onChange={(e)=>{setsearchKey(e.target.value)}}
                    value={searchKey}
                    type='text' 
                    className='form-control mb-2 w-100' 
                    placeholder="Search Your Favourite Food" />
                </div>

                <div className="col-md-3 mt-2">
                    <button className='btn w-100' onClick={()=>{dispatch(filterFoods(searchKey,category))}}>Filter By</button>
                </div>

            </div>

        </div>
    );
}
