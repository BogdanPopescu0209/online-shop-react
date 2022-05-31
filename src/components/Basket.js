import { React, useContext } from "react";
import Context from "../contexts/Context";
import { useForm } from "react-hook-form";

export default function Basket() {

    const { basket, removeFromBasket, placeOrder } = useContext(Context);
    const { register, watch } = useForm();

    let name = watch("name");

    let totalPrice = 0;
    let totalQuantity = 0;

    for (let i = 0; i < basket.length; i++) {

        totalPrice += basket[i].price;
        totalQuantity += basket[i].quantity;

    }

    return (
        <div className="display-cards">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="basket-box">
                            <h1 className="basket-style">Total Price: £{totalPrice.toFixed(2)}</h1>
                            <h2 className="basket-style">Quantity: {totalQuantity}</h2>
                            <input {...register("name")} placeholder="Enter Name" className="basket-input"></input>
                            <button className="basket-button" onClick={() => placeOrder(basket, name, totalPrice, totalQuantity)}>Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {
                        basket.map((item, index) => (
                            <div key={index}>
                                <div className="card">
                                    <img src={item.image} alt="Logo"></img>
                                    <h1 className="card-title">{item.description}</h1>
                                    <p className="price">£{item.price}</p>
                                    <p>Brand: {item.brand}</p>
                                    <p>Size: {item.size}</p>
                                    <p>Colour: {item.colour}</p>
                                    <p><button onClick={() => removeFromBasket(item)}><i className="fa-solid fa-trash-can"></i> Remove from Basket</button></p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}