import React, { useState } from 'react';
import "./Registerscreen.css"
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../actions/userActions'
import Loading from '../Component/Loading'
import Success from '../Component/Success'
import Error from '../Component/Error'

export default function Registerscreen() {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [cpassword, setcpassword] = useState('')
  const registerstate = useSelector(state => state.registerUserReducer)
  const {error, loading, success}= registerstate


  const dispatch = useDispatch()

  function register() {
    if (password !== cpassword) {
      alert('Password not matched!')
    }
    else {
      const user = {
        name,
        email,
        password
      }
      console.log(user)
      dispatch(registerUser(user))
    }

  }

  return (
    <div>
      <div className="row justify-content-center" style={{marginTop:'7%'}}>
        <div className="col-md-5 shadow p-3 mb-5 bg-white rounded">

          {loading && (<Loading/>)}
          {success && (<Success success='User Registration Successful'/>)}
          {error && (<Error error='Email already registered'/>)}

          <h2><strong>Register</strong></h2>
          <div>
            <input type="text"
              placeholder="Enter your name"
              className="form-control"
              required
              value={name}
              onChange={(e) => { setname(e.target.value) }} />

            <input type="text"
              placeholder="Email"
              className="form-control"
              required
              value={email}
              onChange={(e) => { setemail(e.target.value) }} />

            <input type="text"
              placeholder="Password"
              className="form-control"
              required
              value={password}
              onChange={(e) => { setpassword(e.target.value) }} />

            <input type="text"
              placeholder="Confirm Password"
              className="form-control"
              required
              value={cpassword}
              onChange={(e) => { setcpassword(e.target.value) }} />

            <button
              className="btn1" onClick={register}>
              Register
            </button>
            <a href='/login' style={{color:'black', textDecoration:'none'}}>Click Here To Login</a>
          </div>
        </div>
      </div>
    </div>

  );
}
