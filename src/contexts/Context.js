import { React, useState, useEffect, createContext } from "react";
import axios from "axios";

const Context = createContext();

export function ContextProvider({ children }) {

    const [basket, setBasket] = useState([]);
    const [clothes, setClothes] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:8000/collection/clothes')
            .then(res => {
                console.log(res)
                setClothes(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    useEffect(() => {

        axios.get('http://localhost:8000/collection/orders')
            .then(res => {
                console.log(res)
                setOrders(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    const addToBasket = (item) => {

        for (let i = 0; i < clothes.length; i++) {

            if (clothes[i]._id === item._id) {

                let oldQuantity = clothes[i].quantity;
                let newQuantity = oldQuantity - 1;
                clothes[i].quantity = newQuantity;

            }

        }

        setBasket([...basket, {
            index: basket.length,
            _id: item._id,
            name: item.name,
            brand: item.brand,
            size: item.size,
            price: item.price,
            colour: item.colour,
            quantity: 1,
            type: item.type,
            image: item.image,
            description: item.description
        }])

    }

    const removeFromBasket = (item) => {

        const index = item.index;

        setBasket(basket.filter(product => product.index !== index))

        for (let i = 0; i < clothes.length; i++) {

            if (clothes[i]._id === item._id) {

                let oldQuantity = clothes[i].quantity;
                let newQuantity = oldQuantity + 1;
                clothes[i].quantity = newQuantity;

            }

        }

    }

    const searchItem = (item) => {

        let string = item.charAt(0).toUpperCase() + item.slice(1)

        axios.get('http://localhost:8000/search/clothes/' + string)
            .then(res => {
                console.log(res)
                setClothes(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }

    const showAll = () => {

        axios.get('http://localhost:8000/collection/clothes')
            .then(res => {
                console.log(res)
                setClothes(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }

    const sortHighToLow = () => {

        axios.get('http://localhost:8000/sorthightolow/collection/clothes')
            .then(res => {
                console.log(res)
                setClothes(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }

    const sortLowToHigh = () => {

        axios.get('http://localhost:8000/sortlowtohigh/collection/clothes')
            .then(res => {
                console.log(res)
                setClothes(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }

    const placeOrder = (items, name, totalPrice, totalQuantity) => {

        let today = new Date();
        let time = today.getHours() + ":" + today.getMinutes();
        var date = +today.getDate() + "/" + (today.getMonth() + 1) + '/' + today.getFullYear();

        axios.post('http://localhost:8000/collection/orders', {
            name: name,
            time: time,
            date: date,
            items: items,
            total_price: totalPrice,
            total_quantity: totalQuantity

        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        alert("Your order has been received.")

    }

    return (
        <Context.Provider value={{ clothes: clothes, orders: orders, setOrders: setOrders, basket: basket, searchItem: searchItem, showAll: showAll, sortLowToHigh: sortLowToHigh, sortHighToLow: sortHighToLow, addToBasket: addToBasket, removeFromBasket: removeFromBasket, placeOrder: placeOrder }}>{children}</Context.Provider>
    )
}

export default Context;