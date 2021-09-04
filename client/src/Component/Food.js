import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import pizzas from '../pizzasdata'; //static data
import './CssStyle/Food.css'
import { Modal } from 'react-bootstrap';
import { addToCart } from '../actions/cartActions';

const Food = ({ pizza }) => {

    const [quantity, setquantity] = useState(1)
    const [varient, setvarient] = useState('Half')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()
    function addtocart() {
        dispatch(addToCart(pizza, quantity, varient))
    }

    return (<div>
        <div className='shadow-lg p-3 mb-5 bg-body rounded'>
            <div onClick={handleShow}>
                <h1>{pizza.name}</h1>
                <img src={pizza.image} alt='Piza image' className="img-fluid" />
            </div>
            <div className="container">
                <div className="m-2 w-100">
                    <p>Size</p>
                    <select className='form-control' value={varient} onChange={(e) => { setvarient(e.target.value) }}>
                        {pizza.varients.map(varient => {
                            return <option value={varient}>{varient}</option>
                        })}
                    </select>
                </div>
                <div className="m-2 w-100">
                    <p>Quantity</p>
                    <select className='form-control' value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i + 1}>{i + 1}</option>
                        })}
                    </select>
                </div>

                <div>
                    <div className='container'>
                        <div className='m-2 w-100'>
                            <h5>Price: {pizza.prices[0][varient] * quantity} Rs/-</h5>
                        </div>
                        <div className='m-2 w-100'>
                            <button className="btn" onClick={addtocart}>Add to Cart</button>
                        </div>
                    </div>
                </div>

            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={pizza.image} alt='piza image'
                        className='container-fluid'
                        style={{ height: '200px', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '50%' }} />
                    <p>{pizza.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className="btn" onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    </div>
    )
}

export default Food;
