const Main = () => {
    return (
        <main className="site-main" id="content">

            {/* HERO SECTION */}
            <section className="hero-section" aria-labelledby="hero-section">
                <div className="container hero__grid">
                    <div>
                        <div className="hero__kicker">Little Lemon</div>
                        <h1 className="hero__title">Chicago</h1>
                        <p className="hero_copy">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet, purus sed ultricies fermentum, sapien nisl venenatis ligula, vel ultrices sem libero at eros. 
                        </p>
                        <button className="btn dark">Reserve a Table</button>
                    </div>
                    <div className="hero__img placeholder"></div>
                </div>
                {/* <h1 id="hero-title">Welcome to Little Lemon</h1>
                <p>Mediterranean Flavors, made daily.</p> */}
            </section>
            
            {/* SPECIALS SECTION */}
            <section className="specials-section" style={{ marginTop: 12 }}>
                <div className="container">
                    <div className="specials__head">
                        <h2 id="specials-title">Specials</h2>
                        <span className="badge">Online Menu</span>
                    </div>

                    <div className="card-grid">
                        <article className="card">
                          <div className="card__media placeholder"></div>
                          <div className="card__body">
                            <div className="card__row">
                              <span className="heading-3">Greek Salad</span>
                              <span className="price">$12.34</span>
                            </div>
                            <p className="card__desc">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet, purus sed ultricies fermentum, sapien nisl venenatis ligula, vel ultricies sem libero at eros.
                            </p>
                            <a className="card__cta">Order a Delivery</a>
                          </div>
                        </article>

                        <article className="card">
                          <div className="card__media placeholder"></div>
                          <div className="card__body">
                            <div className="card__row">
                              <span className="heading-3">Lemon Pasta</span>
                              <span className="price">$12.34</span>
                            </div>
                            <p className="card__desc">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet, purus sed ultricies fermentum, sapien nisl venenatis ligula, vel ultricies sem libero at eros.
                            </p>
                            <a className="card__cta">Order a Delivery</a>
                          </div>
                        </article>

                        <article className="card">
                          <div className="card__media placeholder"></div>
                          <div className="card__body">
                            <div className="card__row">
                              <span className="heading-3">Bruschetta</span>
                              <span className="price">$12.34</span>
                            </div>
                            <p className="card__desc">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet, purus sed ultricies fermentum, sapien nisl venenatis ligula, vel ultricies sem libero at eros.
                            </p>
                            <a className="card__cta">Order a Delivery</a>
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
                    {Array(4).fill(null).map((_, i) => (
                        <article className="testi" key={i}>
                            <div className="testi-header">
                                <div className="avatar"></div>
                                <div className="rating-label">Rating</div>
                            </div>
                            <div className="testi_name">Full Name</div>
                            <div className="testi_text">Detailed Review</div>
                        </article>
                    ))}
                </div>
            </section>
            
            {/* ABOUT SECTION */}
            <section className="about-section">
                <div className="about__grid">
                    <div className="about__copy">
                        <h2 id="about-title">Little Lemon</h2>
                        <p className="lead">Chicago</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Praesent laoreet, purus sed ultricies fermentum, sapien nisl venenatis ligula, vel ultricies sem libero at eros.
                        </p>
                        <p>
                            Cras id sem a enim interdum viverra. Praesent luctus est et erat eleifend tempus. Vestibulum dignissim sem interdum nunc faucibus mollis. Sed tincidunt in ipsum vel pretium.
                        </p>
                    </div>

                    <div className="about__photos">
                        <div className="photo photo-1"></div>
                        <div className="photo photo-2"></div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Main;