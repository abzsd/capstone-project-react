import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            {/* HERO SECTION */}
            <section className="hero-section" aria-labelledby="hero-section">
                <div className="container hero__grid">
                    <div>
                        <div className="hero__kicker">Little Lemon</div>
                        <h1 className="hero__title">Chicago</h1>
                        <p className="hero_copy">
                            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                        </p>
                        <Link to="/booking">
                            <button className="btn dark">Reserve a Table</button>
                        </Link>
                    </div>
                    <div className="hero__img placeholder"></div>
                </div>
            </section>

            {/* SPECIALS SECTION */}
            <section className="specials-section" style={{ marginTop: 12 }}>
                <div className="container">
                    <div className="specials__head">
                        <h2 id="specials-title">This week's specials!</h2>
                        <button className="badge">Online Menu</button>
                    </div>

                    <div className="card-grid">
                        <article className="card">
                          <div className="card__media placeholder"></div>
                          <div className="card__body">
                            <div className="card__row">
                              <span className="heading-3">Greek Salad</span>
                              <span className="price">$12.99</span>
                            </div>
                            <p className="card__desc">
                              The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                            </p>
                            <a href="#order" className="card__cta">Order a delivery</a>
                          </div>
                        </article>

                        <article className="card">
                          <div className="card__media placeholder"></div>
                          <div className="card__body">
                            <div className="card__row">
                              <span className="heading-3">Bruschetta</span>
                              <span className="price">$5.99</span>
                            </div>
                            <p className="card__desc">
                              Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                            </p>
                            <a href="#order" className="card__cta">Order a delivery</a>
                          </div>
                        </article>

                        <article className="card">
                          <div className="card__media placeholder"></div>
                          <div className="card__body">
                            <div className="card__row">
                              <span className="heading-3">Lemon Dessert</span>
                              <span className="price">$5.00</span>
                            </div>
                            <p className="card__desc">
                              This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                            </p>
                            <a href="#order" className="card__cta">Order a delivery</a>
                          </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS SECTION */}
            <section className="testimonials-section">
                <div className="container">
                    <h2 id="testimonials-title">Testimonials</h2>
                </div>

                <div className="testi-grid">
                    <article className="testi">
                        <div className="testi-header">
                            <div className="avatar"></div>
                            <div className="rating-label">Rating: 5★</div>
                        </div>
                        <div className="testi_name">Sarah Johnson</div>
                        <div className="testi_text">Best Mediterranean food in Chicago! The atmosphere is cozy and the staff is incredibly friendly.</div>
                    </article>

                    <article className="testi">
                        <div className="testi-header">
                            <div className="avatar"></div>
                            <div className="rating-label">Rating: 5★</div>
                        </div>
                        <div className="testi_name">Michael Chen</div>
                        <div className="testi_text">Amazing experience! The lemon dessert is to die for. Will definitely be coming back.</div>
                    </article>

                    <article className="testi">
                        <div className="testi-header">
                            <div className="avatar"></div>
                            <div className="rating-label">Rating: 5★</div>
                        </div>
                        <div className="testi_name">Emily Rodriguez</div>
                        <div className="testi_text">Authentic flavors and generous portions. The Greek salad is my favorite!</div>
                    </article>

                    <article className="testi">
                        <div className="testi-header">
                            <div className="avatar"></div>
                            <div className="rating-label">Rating: 5★</div>
                        </div>
                        <div className="testi_name">David Thompson</div>
                        <div className="testi_text">A hidden gem! The bruschetta appetizer was perfectly seasoned and the service was excellent.</div>
                    </article>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="about-section">
                <div className="about__grid">
                    <div className="about__copy">
                        <h2 id="about-title">Little Lemon</h2>
                        <p className="lead">Chicago</p>
                        <p>
                            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.
                        </p>
                        <p>
                            Founded by two Italian brothers, Adrian and Mario, Little Lemon has become a beloved Chicago staple. Our chefs draw inspiration from Italian, Greek, and Turkish culture to create unique and delicious dishes that celebrate Mediterranean cuisine.
                        </p>
                    </div>

                    <div className="about__photos">
                        <div className="photo photo-1"></div>
                        <div className="photo photo-2"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
