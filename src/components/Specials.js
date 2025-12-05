import React from "react";

const Specials = () => {
    const specialsData = [
        {
            id: 1,
            name: "Greek Salad",
            price: "$12.99",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            image: null
        },
        {
            id: 2,
            name: "Bruschetta",
            price: "$5.99",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            image: null
        },
        {
            id: 3,
            name: "Lemon Dessert",
            price: "$5.00",
            description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            image: null
        }
    ];

    return (
        <section className="specials-section" style={{ marginTop: 12 }}>
            <div className="container">
                <div className="specials__head">
                    <h2 id="specials-title">This week's specials!</h2>
                    <button className="badge">Online Menu</button>
                </div>

                <div className="card-grid">
                    {specialsData.map((special) => (
                        <article className="card" key={special.id}>
                            <div className="card__media placeholder"></div>
                            <div className="card__body">
                                <div className="card__row">
                                    <span className="heading-3">{special.name}</span>
                                    <span className="price">{special.price}</span>
                                </div>
                                <p className="card__desc">
                                    {special.description}
                                </p>
                                <a href="#order" className="card__cta">Order a delivery</a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Specials;
