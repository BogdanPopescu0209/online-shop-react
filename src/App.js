import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Orders from "./components/Orders";
import Basket from "./components/Basket";
import { ContextProvider } from './contexts/Context'

export default function App() {
    return (
        <ContextProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/basket" element={<Basket />} />
                </Routes>
            </Router>
        </ContextProvider>
    )
}