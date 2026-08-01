import '../Styles/Contact.css';
import { Link } from 'react-router-dom';

function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <main className="contact">
                <h1>CONTACT</h1>
                <p className="intro-text">
                    If you have any questions, feel free to reach out to us!
                </p>

                <div className="form-container">
                    <div className="bow-decoration">🎀</div>

                    <form onSubmit={handleSubmit}>
                        <div className="name-row">
                            <div className="form-group">
                                <label>Name (required)</label>
                                <span className="sub-label">First Name</span>
                                <input type="text" required />
                            </div>
                            <div className="form-group">
                                <label style={{ visibility: 'hidden' }}>Last Name</label>
                                <span className="sub-label">Last Name</span>
                                <input type="text" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Email (required)</label>
                            <input type="email" required />
                        </div>

                        <div className="form-group">
                            <label>Why do you wish to work with us?</label>
                            <input type="text" />
                        </div>

                        <div className="form-group">
                            <label>Message (required)</label>
                            <textarea rows="6" required />
                        </div>

                        <button type="submit" className="submit-btn">SUBMIT</button>
                    </form>
                </div>
            </main>

            <footer className="bottom-section">
                <h2>CRAFTING <span>unforgettable</span> MOMENTS</h2>

                <section className="social-media">
                    <h2>Follow Us</h2>
                    <p>Stay connected with us on social media!</p>
                    <p className="sm">
                        <a href="https://twitter.com">X</a> |
                        <a href="https://facebook.com">Facebook</a> |
                        <a href="https://www.instagram.com/sol.eventsplanner?igsh=MWxxd3JtdTB2aml6NQ==">Instagram</a>
                    </p>
                </section>
            </footer>
        </>
    );
}

export default Contact;