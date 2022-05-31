import { React, useContext } from "react";
import Context from "../contexts/Context";
import { useForm } from "react-hook-form";

export default function Shop() {

    const { clothes, addToBasket, searchItem, showAll, sortLowToHigh, sortHighToLow } = useContext(Context)

    const { register, watch } = useForm();

    let product = watch("searchItem");

    return (
        <div className="display-cards">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="search-price">Sort by price: </p>
                        <button onClick={() => sortLowToHigh()} className="lowHigh">Low to High</button>
                        <button onClick={() => sortHighToLow()} className="highLow">High to Low</button>
                    </div>
                    <div className="col">
                        <div className="search-bar">
                            <form>
                                <label>
                                    <input
                                        className="nav-form"
                                        type="text"
                                        placeholder="Search..."
                                        {...register("searchItem")}
                                    />
                                </label>
                            </form>
                            <button onClick={() => searchItem(product)} className="searchBtn"><i className="fa-solid fa-magnifying-glass"></i></button>
                            <button onClick={() => showAll()} className="search-show">Show All</button>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row">
                    {
                        clothes.map((item, index) => (
                            <div key={index}>
                                <div className="card">
                                    <img src={item.image} alt="Logo"></img>
                                    <h1 className="card-title">{item.description}</h1>
                                    <p className="price">£{item.price}</p>
                                    <p>Brand: {item.brand}</p>
                                    <p>Size: {item.size}</p>
                                    <p>Colour: {item.colour}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <p><button disabled={item.quantity === 0} onClick={() => addToBasket(item)}><i className="fa-solid fa-cart-plus"></i> Add to Basket</button></p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}