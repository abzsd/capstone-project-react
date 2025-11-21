import logo from "../assets/Logo.svg";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer__grid">
                <section className="footer__logo">
                    <img src={logo} alt="Little Lemon Logo" />
                    <div className="footer__map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.3315524960163!2d-87.6298!3d41.8781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca55810a493%3A0x4700ddf60fcbb686!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1234567890"
                            width="100%"
                            height="200"
                            style={{ border: 0, borderRadius: '8px', marginTop: '16px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Little Lemon Restaurant Location"
                        ></iframe>
                    </div>
                </section>

                <section className="footer__nav" aria-labelledby="footer-nav">
                    <h3 id="footer-nav">Doormat Navigation:</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/order">Order online</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </section>

                <section className="footer__contact" aria-labelledby="footer-contact">
                    <h3 id="footer-contact">Contact:</h3>
                    <h4 id="footer-about" style={{marginTop: 0}}> Little Lemon</h4>
                    <p>123 Flavor St, Foodville, FL 12345</p>
                    <p>+91-1234567890</p>
                    <p>littellemon@gmail.com</p>
                    <p>Open daily 11:00-22:00</p>
                </section>
                

                <section className="footer__social" aria-labelledby="footer-social">
                    <h3 id="footer-social">Quick Links:</h3>
                    <ul>
                    <li><a href="/privacy">Privacy</a></li>
                    <li><a href="/terms">Terms of Service</a></li>
                    <li><a href="/contact">Contact</a></li>
                    </ul>
                </section>
            </div>

            <small>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</small>
        </footer>
    );
};

export default Footer;