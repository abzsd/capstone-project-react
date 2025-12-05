import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
    return (
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
    );
};

export default CallToAction;
