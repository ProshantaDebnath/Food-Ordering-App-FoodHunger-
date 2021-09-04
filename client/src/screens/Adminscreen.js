import React, { useEffect } from 'react';
import './StyleCSS/Adminscreen.css'
import { useSelector, useDispatch } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom'
import Userslist from './Userslist';
import Itemslist from './Itemslist';
import Addnew from './Addnew';
import Orderslist from './Orderslist';


export default function Adminscreen() {

    const userstate = useSelector((state) => state.loginUserReducer)
    const { currentUser } = userstate
    const dispatch = useDispatch()

    useEffect(() => {

        if (!currentUser.isAdmin) {

            window.location.href = '/home'
        }

    }, [])

    return (
        <div>

            <div className='row justify-content-center p-3'>
                <div className='col-md-10'>
                    <h2 style={{ fontSize: '25px', fontWeight: 'bold' }}>Admin Panel</h2>

                    <ul className='adminpanel'>
                        <li><Link to={'/admin/userslist'}>Users List</Link></li>
                        <li><Link to={'/admin/itemslist'}>Items List</Link></li>
                        <li><Link to={'/admin/addnew'}>Add New</Link></li>
                        <li><Link to={'/admin/orderslist'}>Orders List</Link></li>
                    </ul>


                    <Switch>
                        <Route path='/admin' exact component={Userslist} />
                        <Route path='/admin/userslist' exact component={Userslist} />
                        <Route path='/admin/itemslist' exact component={Itemslist} />
                        <Route path='/admin/addnew' exact component={Addnew} />
                        <Route path='/admin/orderslist' exact component={Orderslist} />
                    </Switch>

                </div>

            </div>


        </div>
    );
}
