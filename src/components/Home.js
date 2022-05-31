import React from "react";

import adidas from "../images/adidas.png"
import hugoboss from "../images/hugoboss.jpeg"
import nike from "../images/nike.jpeg"
import thenorthface from "../images/thenorthface.png"
import tommyhilfiger from "../images/tommyhilfiger.jpeg"

export default function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="style-text">Find exclusive brands only at TheStreetShop!</h1>
                    <p className="style-text">Discover the latest fashion trends with TheStreetShop. Shop the new collection of clothing, footwear, accessories, beauty products and more. Order today from TheStreetShop.</p>
                    <h2 className="style-text">The Home of Shopping!</h2>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="logo-container">
                        <img className="logo-clothes" src={adidas} alt="adidas logo"></img>
                        <img className="logo-clothes" src={hugoboss} alt="hugoboss logo"></img>
                        <img className="logo-clothes" src={nike} alt="nike logo"></img>
                        <img className="logo-clothes" src={thenorthface} alt="thenorthface logo"></img>
                        <img className="logo-clothes" src={tommyhilfiger} alt="tommyhilfiger"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}