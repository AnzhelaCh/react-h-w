import logo from "../images/logo.png";
import React from "react";

const Header = () => {
    return (
        <>
            <header>
                <div className="header-wrap">
                    <div className="logo">
                        <img src={logo} alt="Homework 5" />
                    </div>

                    <nav className="main-nav hamburger-menu">

                        <input id="menu__toggle" type="checkbox" />
                        <label className="menu__btn" htmlFor="menu__toggle">
                            <span></span>
                        </label>


                        <ul className="desktop-menu-wrapper menu__box">
                            <li key="icon-01">
                                <a className="menu__item" href="#about">About us</a>
                            </li>
                            <li key="icon-02">
                                <a className="menu__item" href="#item-card">Reservation</a>
                            </li>
                            <li key="icon-03">
                                <a className="menu__item" href="#album">Gallery</a>
                            </li>
                            <li key="icon-04">
                                <a className="menu__item" href="#feature-program">Blog</a>
                            </li>
                            <li key="icon-05">
                                <a className="menu__item" href="#benefits">Elements</a>
                            </li>
                            <li key="icon-06">
                                <a className="menu__item" href="#item-card">Shop</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

        </>
    )
}
export default Header;