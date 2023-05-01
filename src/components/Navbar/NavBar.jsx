import React from "react";
import "./navbar.css"
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () =>{
    return (
        <div className="navbar_div">
            
            <CartWidget/>
        </div>
    )
} 