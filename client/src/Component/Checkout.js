import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/OrderActions';
import Error from '../Component/Error'
import Loading from '../Component/Loading'
import Success from '../Component/Success'

export default function Checkout({ subtotal }) {

    const orderstate = useSelector((state) => state.placeOrderReducer)
    const { loading, error, success } = orderstate

    const dispatch = useDispatch()

    function tokenHandeler(token) {
        console.log(token)
        dispatch(placeOrder(token, subtotal))
    }

    return (
        <div>

            {loading && (<Loading />)}
            {error && (<Error error='Something went wrong' />)}
            {success && (<Success success='Your order placed successfully' />)}

            <StripeCheckout
                amount={subtotal * 100}
                shippingAddress
                token={tokenHandeler}
                stripeKey='pk_test_51JDYrASINPgtDTHItVZVyU3a8w7Z02Br3OU2AizHV7F3tVHozdzytTpkIeIlw50IK10cA363mrOhDQ0mfcE81QYT00S2NyvRLg'
                currency='INR'
            >

                <button className='btn btn-lg btn-primary'>Pay Now</button>

            </StripeCheckout>

        </div>
    );
}
