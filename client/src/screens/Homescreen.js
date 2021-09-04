import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllFoods } from '../actions/foodActions'
import Error from '../Component/Error'
import Food from '../Component/Food'
import Loading from '../Component/Loading'
import Search from '../Component/Search'
// import pizzas from '../pizzasdata' static data

const Homescreen = () => {
    const dispatch = useDispatch()

    const foodsstate = useSelector(state => state.getAllFoodsReducer)

    const { pizzas, error, loading } = foodsstate

    useEffect(() => {
        dispatch(getAllFoods())
    }, [])

    return (
        <div>
            <Search/>
            <div className="row justify-content-center">

                {loading ? <Loading /> :
                    error ? <Error error='Something Went Wrong' /> : (

                        pizzas.map(pizza => {
                            return <div className="col-md-3 m-3" key={pizza._id}>
                                <div >
                                    <Food pizza={pizza} />

                                </div>
                            </div>
                        })

                    )}


            </div>
        </div>
    )
}

export default Homescreen;
