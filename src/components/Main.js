const Main = () => {
    return (
        <main id="content">
            <section aria-labelledby="hero-section">
                <h1 id="hero-title">Welcome to Little Lemon</h1>
                <p>Mediterranean Flavors, made daily.</p>
            </section>

            <section aria-labelledby="specials-section">
                <h2 id="specials-title">Specials</h2>
                {/* Cards list of specials would go here */}
            </section>

            <section aria-labelledby="testimonials-section">
                <h2 id="testimonials-title">Testimonials</h2>
                {/* Cards list of specials would go here */}
            </section>

            <section aria-labelledby="about-section">
                <h2 id="about-title">About Little Lemon</h2>
                {/* Cards list of specials would go here */}
            </section>
        </main>
    );
};

export default Main;