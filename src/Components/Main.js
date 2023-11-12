import img01 from "../images/img-01.jpg";
import img02 from "../images/img-02.jpg";
import img03 from "../images/img-03.jpg";
import img04 from "../images/img-04.jpg";
import img05 from "../images/img-05.jpg";
import img06 from "../images/img-06.jpg";
import img07 from "../images/img-07.jpg";
import img08 from "../images/img-08.jpg";
import img09 from "../images/img-09.jpg";
import img10 from "../images/img-10.jpg";
import img11 from "../images/img-11.jpg";
import img12 from "../images/img-12.jpg";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import img13 from "../images/img-13.jpg";
import ico01 from "../images/ico-01.png";
import ico02 from "../images/ico-02.png";
import ico03 from "../images/ico-03.png";
import ico04 from "../images/ico-04.png";
import ico05 from "../images/ico-05.png";
import ico06 from "../images/ico-06.png";
import ico07 from "../images/ico-07.png";
import ico08 from "../images/ico-08.png";
import React from "react";

const Main = () => {
    return (
        <>
            <main>
                <section id="banner-form" className="banner-form">
                    <div className="trial-info">
                        <h1>
                            Just Balance <br />
                            your Mind & Body
                        </h1>
                        <p>
                            Create the healthy living<br />
                            for yourself
                        </p>
                    </div>
                    <div className="trial">
                        <form action="#">
                            <h2>
                                Trial Class
                            </h2>
                            <fieldset>
                                <p>
                                    <input type="text" name="name" placeholder="Enter your name" />
                                </p>
                                <p>
                                    <input type="tel" name="phone" placeholder="Enter your phone" />
                                </p>
                                <p>
                                    <select>
                                        <option value="default">Chose your class</option>
                                        <option value="A1">A1</option>
                                        <option value="A2">A2</option>
                                        <option value="A3">A3</option>
                                        <option value="A4">A4</option>
                                    </select>
                                </p>
                                <p>
                                    <input type="submit" className="btn-submit" value="Try it" />
                                </p>


                            </fieldset>
                        </form>
                    </div>

                </section>
                <section id="feature-program" className="feature-program">
                    <h2>
                        Yoga FEATURE PROGRAM
                    </h2>
                    <p>
                        Our Classes
                    </p>
                    <div className="feature-program-wrap">
                        <div className="item">
                            <img src={img01} alt="Feature program" />
                            <div className="info">
                                <h3>
                                    Yoga For Health
                                </h3>
                                <p>
                                    Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                    consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                                </p>
                                <a href="https://a-level.com.ua/">Ashtanga - Hatha</a>
                            </div>
                        </div>
                        <div className="item">
                            <img src={img02} alt="Feature program" />
                            <div className="info">
                                <h3>
                                    Yoga For Health
                                </h3>
                                <p>
                                    Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                    consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                                </p>
                                <a href="https://a-level.com.ua/">Ashtanga - Hatha</a>
                            </div>
                        </div>
                        <div className="item">
                            <img src={img03} alt="Feature program" />
                            <div className="info">
                                <h3>
                                    Yoga For Health
                                </h3>
                                <p>
                                    Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                    consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                                </p>
                                <a href="https://a-level.com.ua/">Ashtanga - Hatha</a>
                            </div>
                        </div>
                        <div className="item">
                            <img src={img04} alt="Feature program" />
                            <div className="info">
                                <h3>
                                    Yoga For Health
                                </h3>
                                <p>
                                    Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                    consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                                </p>
                                <a href="https://a-level.com.ua/">Ashtanga - Hatha</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="album" className="album">
                    <ul>
                        <li className="icon-search" key="icon-101">
                            <a href="https://a-level.com.ua/">
                                <img src={img05} alt="album" />
                            </a>
                        </li>
                        <li className="icon-search" key="icon-102">
                            <a href="https://a-level.com.ua/">
                                <img src={img06} alt="album" />
                            </a>
                        </li>
                        <li className="icon-search" key="icon-103">
                            <a href="https://a-level.com.ua/">
                                <img src={img07} alt="album" />
                            </a>
                        </li>
                        <li className="icon-search" key="icon-104">
                            <a href="https://a-level.com.ua/">
                                <img src={img08} alt="album" />
                            </a>
                        </li>
                        <li className="icon-search" key="icon-105">
                            <a href="https://a-level.com.ua/">
                                <img src={img09} alt="album" />
                            </a>
                        </li>
                        <li className="icon-search" key="icon-106">
                            <a href="https://a-level.com.ua/">
                                <img src={img10} alt="album" />
                            </a>
                        </li>
                        <li className="icon-search" key="icon-107">
                            <a href="https://a-level.com.ua/">
                                <img src={img11} alt="album" />
                            </a>
                        </li>
                        <li className="icon-search" key="icon-108">
                            <a href="https://a-level.com.ua/">
                                <img src={img12} alt="album" />
                            </a>
                        </li>
                    </ul>


                </section>
                <section id="about" className="about">
                    <div className="container">
                        <div className="wrapper">
                            <div className="about-info">
                                <h2>
                                    About us
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi
                                    ut aliquip ex ea commodo consequat. Duis aute irure dolor it in lorei voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur lorem ispum loting sokui.
                                </p>
                            </div>


                            <Swiper navigation={true} modules={[Navigation]} className="SwiperAbout swiper">
                                <SwiperSlide> <img src={img13} alt="Yoga" /></SwiperSlide>
                                <SwiperSlide> <img src={img13} alt="Yoga" /></SwiperSlide>
                                <SwiperSlide> <img src={img13} alt="Yoga" /></SwiperSlide>
                            </Swiper>


                        </div>
                    </div>
                </section>
                <section id="benefits" className="benefits">
                    <div className="container">
                        <ul>
                            <li key="icon-110">
                                <div className="ico">
                                    <img src={ico01} alt="Yoga" />
                                </div>

                                <h3>
                                    IMPROVED OVERALL<br />
                                    HEALTH
                                </h3>
                                <p>
                                    Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.
                                </p>
                            </li>
                            <li key="icon-111">
                                <div className="ico">
                                    <img src={ico02} alt="Yoga" />
                                </div>

                                <h3>
                                    INCREASED<br />
                                    CONCENTRATION
                                </h3>
                                <p>
                                    Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.
                                </p>
                            </li>
                            <li key="icon-112">
                                <div className="ico">
                                    <img src={ico03} alt="Yoga" />
                                </div>

                                <h3>
                                    BLANCE<br />
                                    YOUR MIND
                                </h3>
                                <p>
                                    Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.
                                </p>
                            </li>
                            <li key="icon-113">
                                <div className="ico">
                                    <img src={ico04} alt="Yoga" />
                                </div>

                                <h3>
                                    SLEEP<br />
                                    BETTER
                                </h3>
                                <p>
                                    Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.
                                </p>
                            </li>
                            <li key="icon-114">
                                <div className="ico">
                                    <img src={ico05} alt="Yoga" />
                                </div>

                                <h3>
                                    WEIGHT LOSS
                                </h3>
                                <p>
                                    Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.
                                </p>
                            </li>
                            <li key="icon-115">
                                <div className="ico">
                                    <img src={ico06} alt="Yoga" />
                                </div>

                                <h3>
                                    STRENGTHENS<br />
                                    YOUR BONES
                                </h3>
                                <p>
                                    Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.
                                </p>
                            </li>
                            <li key="icon-116">
                                <div className="ico">
                                    <img src={ico07} alt="Yoga" />
                                </div>

                                <h3>
                                    INCREASED<br />
                                    FLEXIBILITY
                                </h3>
                                <p>
                                    Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.
                                </p>
                            </li>
                            <li key="icon-117">
                                <div className="ico">
                                    <img src={ico08} alt="Yoga" />
                                </div>

                                <h3>
                                    LOWER BLOOD<br />
                                    PRESSURE
                                </h3>
                                <p>
                                    Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>
                <section id="item-card" className="item-card">
                    <div className="container">
                        <div className="card">
                            <div className="card-price">
                        <span>
                            49
                        </span>
                            </div>

                            <div className="card-info">
                                <p>ENTRY DATE: MON – FRI</p>
                                <p>ENTRY TIME: 8A.M – 8P.M</p>
                                <p>NUTRITION ADVICER: NO</p>
                                <button>
                                    Buy now
                                </button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-price">
                        <span>
                            69
                        </span>
                            </div>

                            <div className="card-info">
                                <p>ENTRY DATE: MON – FRI</p>
                                <p>ENTRY TIME: 8A.M – 8P.M</p>
                                <p>NUTRITION ADVICER: YES</p>
                                <button>
                                    Buy now
                                </button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-price">
                        <span>
                            99
                        </span>
                            </div>

                            <div className="card-info">
                                <p>ENTRY DATE: MON – SUN</p>
                                <p>ENTRY TIME: 8A.M – 8P.M</p>
                                <p>NUTRITION ADVICER: NO</p>
                                <button>
                                    Buy now
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Main;