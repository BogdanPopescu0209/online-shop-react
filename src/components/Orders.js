import { React, useEffect, useContext } from "react";
import Context from "../contexts/Context";
import axios from "axios";


export default function Orders() {

    const { orders, setOrders } = useContext(Context);

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

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {
                            orders.map((item, index) => (
                                <div key={index}>
                                    <div className="display-orders">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Date</th>
                                                    <th>Time</th>
                                                    <th>Items</th>
                                                    <th>Total Price</th>
                                                    <th>Total Quantity</th>
                                                </tr>
                                                <tr>
                                                    <td>{item.name}</td>
                                                    <td>{item.date}</td>
                                                    <td>{item.time}</td>
                                                    <td>
                                                        {item.items.map((product, index) => (
                                                            <div key={index}>
                                                                <p>{(index + 1) + ". " + product.description}</p>
                                                            </div>
                                                        ))}
                                                    </td>
                                                    <td>£{item.total_price}</td>
                                                    <td>{item.total_quantity}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}