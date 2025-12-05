import React from "react";

const BookingPage = () => {
    return (
        <section className="booking-section" style={{ padding: "64px 0", minHeight: "60vh" }}>
            <div className="container">
                <h1 style={{ fontSize: "2.5rem", marginBottom: "24px", color: "var(--brand)" }}>
                    Reserve a Table
                </h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "32px", color: "var(--muted)" }}>
                    Book your table at Little Lemon and experience the finest Mediterranean cuisine in Chicago.
                </p>

                <div style={{
                    maxWidth: "600px",
                    background: "var(--surface)",
                    padding: "32px",
                    borderRadius: "var(--radius)"
                }}>
                    <p style={{
                        textAlign: "center",
                        color: "var(--muted)",
                        fontSize: "1rem"
                    }}>
                        Booking form will be implemented here
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BookingPage;
