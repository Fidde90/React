import React from 'react'
import Scooby from '../../assets/images/scooby_doo_with_magnifying_glass_classic_round_sticker-r8cc4bd0539ee48f585af83b2c3b9c1d1_0ugmp_8byvr_630-removebg-preview.png'
import Button from '../Generics/Buttons'

const PageNotFound = () => {
    return (
        <div>
            <div className="container">
                <div className="not-found">
                    <h1> 404 Page not Found</h1>
                    <h2>Try again later...</h2>
                    <img src={Scooby} alt="pictue of scooby doo" />
                    <Button type="black" text="Back to homepage..." url="/" symbol="fa-regular fa-arrow-up-right" />
                </div>
            </div>
        </div>
    )
}

export default PageNotFound