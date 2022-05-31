import { React, useContext } from "react";
import Context from "../contexts/Context";
import { Link } from "react-router-dom";

import logo from "../images/logo.png"

export default function Navbar() {

    const { basket } = useContext(Context);

    let disableLink = "";

    if(basket.length === 0){

        disableLink = "none";

    }

    return (
        <nav className="nav">
            <img className="logo" src={logo} alt="logo"></img>
            <Link to="/">
                <button className="nav-button"><i className="fa-solid fa-house"></i>Home</button>
            </Link>
            <Link to="/shop">
                <button className="nav-button"><i className="fa-brands fa-shopify"></i>Shop</button>
            </Link>
            <Link to="/orders">
                <button className="nav-button"><i className="fa-solid fa-folder-open"></i>Orders</button>
            </Link>
            <Link to="/basket" style={{pointerEvents: disableLink}}>
                <button className="nav-button"><i className="fa-solid fa-basket-shopping"></i>Basket - {basket.length}</button>
            </Link>
        </nav>
    )
}