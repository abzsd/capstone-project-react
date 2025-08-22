const Footer = () => {
    return (
        <footer>
            <section aria-labelledby="footer-about">
                <h2 id="footer-about"> Little Lemon</h2>
                <p>123 Flavor St, Foodville, FL 12345</p>
                <p>Open daily 11:00-22:00</p>
            </section>

            <section aria-labelledby="footer-nav">
                <h3 id="footer-nav">Quick Links</h3>
                <ul>
                    <li><a href="/privacy">Privacy</a></li>
                    <li><a href="/terms">Terms of Service</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </section>

            <small>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</small>
        </footer>
    );
};

export default Footer;