import React from "react";
import "./navbar.css"
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () =>{
    return (
        <div className="navbar_div">
            <p>Brand</p>
            <p>Home</p>
            <p>Productos</p>
            <p>About</p>
            <CartWidget/>
        </div>
    )
} 