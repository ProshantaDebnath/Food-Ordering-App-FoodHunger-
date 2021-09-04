import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/userActions';
import Error from '../Component/Error';
import Loading from '../Component/Loading';


export default function Loginscreen() {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('')
    const dispatch = useDispatch()
    const loginstate = useSelector(state => state.loginUserReducer)
    const { loading, error } = loginstate



    useEffect(() => {

        if (localStorage.getItem('currentUser')) {
            window.location.href = '/home'
        }

    }, [])

    function login() {
        const user = { email, password }
        dispatch(loginUser(user))

    }

    return (
        <div>
            <div className='row justify-content-center' style={{marginTop:'10%'}}>
                <div className="col-md-5 shadow p-3 mb-5 bg-white rounded">
                    <h2 className='text-center m-2' style={{ fontSize: '27px' }}>
                        <strong>Login</strong>
                    </h2>

                    {loading && (<Loading/>)}
                    {error && (<Error error='Invalid Credentials'/>)}
                    
                    <div>
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

                        <button
                            className="btn1" onClick={login}>
                            Login
                        </button>
                        <p>Don't have an Account?<a href='/register' style={{ color: 'blue', textDecoration: 'none' }}>Sign up</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}