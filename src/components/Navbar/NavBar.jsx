import React from "react";
import "./navbar.css"
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () =>{
    return (
        <div className="navbar_div">
            <a href="/">Brand</a>
            <a href="/productos/Hoodie">Hoodie</a>
            <a href="/productos/Remera">Remera</a>
            <a href="/productos/Gorra">Gorra</a>
            <a href="/about">About</a>
            <a href="/cart"><CartWidget/></a>
            
        </div>
    )
} 