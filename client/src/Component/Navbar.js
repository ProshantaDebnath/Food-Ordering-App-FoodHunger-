import React from 'react'
import './CssStyle/Navbar.css'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../actions/userActions'

const Navbar = () => {
    const cartstate = useSelector(state => state.cartReducer)
    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate
    const dispatch = useDispatch()

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light shadow-lg p-2 bg-body rounded">
                <div className="container-fluid">


                    {currentUser ? (
                    <a className="navbar-brand" style={{ fontSize: '30px', fontWeight: 'bold' }} href="/home">FoodHunger</a>
                    ) :
                        (<div>
                        <a className="navbar-brand" style={{ fontSize: '30px', fontWeight: 'bold' }} href="/">FoodHunger</a>
                        </div>)}


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">


                            {currentUser ? (
                                <div className="dropdown mt-2">
                                    <a className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {currentUser.name}
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" style={{ fontSize: '14px', fontWeight: 'bold' }} href="/orders">Orders</a>
                                        <a className="dropdown-item" href="/" onClick={() => { dispatch(logoutUser()) }}>Logout<i className="fas fa-power-off"></i></a>
                                    </div>

                                </div>
                            ) :

                                (<div><li className="nav-item ">
                                    <a className="nav-link " href="/login">Login</a>
                                </li>
                                </div>)}


                            {currentUser ? (
                                <li className="nav-item ">
                                    <a className="nav-link ml-1" href="/cart"><i className="fas fa-cart-plus"></i> {cartstate.cartItems.length}</a>
                                </li>
                            ) : (
                                <li className="nav-item ">
                                    <a className="nav-link ml-3" href="/login"><i className="fas fa-cart-plus"></i></a>
                                </li>

                            )}



                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
