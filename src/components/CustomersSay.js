import React from "react";

const CustomersSay = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            rating: 5,
            review: "Best Mediterranean food in Chicago! The atmosphere is cozy and the staff is incredibly friendly."
        },
        {
            id: 2,
            name: "Michael Chen",
            rating: 5,
            review: "Amazing experience! The lemon dessert is to die for. Will definitely be coming back."
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            rating: 5,
            review: "Authentic flavors and generous portions. The Greek salad is my favorite!"
        },
        {
            id: 4,
            name: "David Thompson",
            rating: 5,
            review: "A hidden gem! The bruschetta appetizer was perfectly seasoned and the service was excellent."
        }
    ];

    return (
        <section className="testimonials-section">
            <div className="container">
                <h2 id="testimonials-title">Testimonials</h2>
            </div>

            <div className="testi-grid">
                {testimonials.map((testimonial) => (
                    <article className="testi" key={testimonial.id}>
                        <div className="testi-header">
                            <div className="avatar"></div>
                            <div className="rating-label">Rating: {testimonial.rating}★</div>
                        </div>
                        <div className="testi_name">{testimonial.name}</div>
                        <div className="testi_text">{testimonial.review}</div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default CustomersSay;
