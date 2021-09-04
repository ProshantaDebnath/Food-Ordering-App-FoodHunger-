import React, { useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { deleteUsers, getAllUsers } from '../actions/userActions';
import Error from '../Component/Error';
import Loading from '../Component/Loading';

export default function Userslist() {

  const dispatch = useDispatch()
  const userstate = useSelector(state=>state.getAllUsersReducer)
  const {error, loading, users } = userstate

  useEffect(() => {
    
      dispatch(getAllUsers())

  }, [])

  return (
    <div>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>Users List</h2>
        {loading && (<Loading/>)}
        {error && (<Error error='Something went wrong'/>)}
        
        <table className='table table-striped table-bordered table-responsive-sm'>  
            <thead className='thead-dark'>
              
                <tr style={{textAlign:'center'}}>
                    <th>User Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Delete</th>
                </tr>

            </thead>

              <tbody>
                  {users && users.map(user=>{
                    return <tr>
                        <td style={{textAlign:'center'}}>{user._id}</td>
                        <td style={{textAlign:'center'}}>{user.name}</td>
                        <td style={{textAlign:'center'}}>{user.email}</td>
                        <td style={{textAlign:'center'}}>
                          <button 
                          className='btn btn-sm'
                          onClick={()=>{dispatch(deleteUsers(user._id))}}>
                          Delete
                          </button>
                        </td>
                    </tr>
                  })}
              </tbody>
        </table>
    
    </div>
  );
}
