import React from "react";

const Footer = () =>{
    return (
        <>
            <footer>
                <div className="container">
                    <div className="wrap">
                        <div className="footer-about">
                            <h3>
                                About
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad m inim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </p>

                        </div>
                        <div className="contact-us">
                            <h3>
                                Contact us
                            </h3>
                            <div className="wrapper">

                                <div>
                                    <address className="contact-us-address">
                                        <p>
                                            5419 Joseph Mountains
                                            Apt. 716
                                        </p>
                                    </address>

                                    <div className="contact-us-tel">
                                        <p>
                                            <a href="tel:+123467890">
                                                +1 234 567 89
                                            </a>
                                            <a href="tel:+123467890">
                                                +1 234 678 90
                                            </a>
                                        </p>


                                    </div>
                                </div>
                                <div>
                                    <a className="contact-us-mail" href="mailto:joga.info@example.com">
                                        joga.info@example.com
                                    </a><br />
                                    <a className="contact-us-web" href="www.example.com">
                                        www.example.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ul className="social-icons">
                        <li key="icon-1">
                            <a href="https://a-level.com.ua/">.</a>
                        </li>
                        <li key="icon-2">
                            <a href="https://a-level.com.ua/">.</a>
                        </li>
                        <li key="icon-3">
                            <a href="https://a-level.com.ua/">.</a>
                        </li>
                        <li key="icon-4">
                            <a href="https://a-level.com.ua/">.</a>
                        </li>
                        <li key="icon-5">
                            <a href="https://a-level.com.ua/">.</a>
                        </li>
                    </ul>
                </div>
                <div className="copyright">
                    Copyright © 2016-2017 Yoga classes
                </div>
            </footer>
        </>
    )
}
export default Footer;