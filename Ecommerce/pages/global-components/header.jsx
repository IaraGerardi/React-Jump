import React from "react";
import { NavLink } from "react-router-dom";
import "./folder-css/header.css"
export function Header() {
    return (
        <header>
            <NavLink to="/">
                <img src="https://i.pinimg.com/originals/0f/41/d0/0f41d0404ae75869088e7c150affab84.png" alt="logo" id="logoHeader" />
            </NavLink>
            <ul id="headerList">
                <li><NavLink to="/cart">
                    <span className="iconify" data-icon="akar-icons:cart" aria-label="cart"></span>
                </NavLink></li>
                <li><NavLink to="/products">
                    <span className="iconify" data-icon="bx:shopping-bag"></span>
                </NavLink></li>
                <li><NavLink to="/wishlist">
                    <span className="iconify" data-icon="akar-icons:heart"></span>
                </NavLink></li>
                <li><NavLink to="/user">
                    <span className="iconify" data-icon="ant-design:user-outlined" ></span>
                </NavLink></li>
            </ul>
        </header>
    )
}