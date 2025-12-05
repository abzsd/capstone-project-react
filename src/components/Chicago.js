import React from "react";

const Chicago = () => {
    return (
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
    );
};

export default Chicago;
