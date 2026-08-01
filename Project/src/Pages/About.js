import '../Styles/About.css';
import { Link } from 'react-router-dom';
import AboutP from '../Img/About.jpeg';

function About() {
    return (
            <main>
                <div className="about-container">
                    <div className="about-media" style={{ backgroundImage: `url(${AboutP})`, backgroundSize: 'cover' }}>
                        <div className="overlay-gold" />
                    </div>

                    <div className="about-content">
                        <h1>Where dreams<br />meet elegance</h1>
                        <div className="heading-accent" />
                        <div className="tagline">
                            <i className="fas fa-feather-alt" style={{ marginRight: 8, color: '#c89f6e' }} />
                            Crafting moments that last forever
                        </div>

                        <div className="story-text">
                            <p><strong>Sol Events Planner</strong> isn't just about organizing events — we're creators of emotion. From intimate destination weddings to grand corporate galas, every detail is tailored to reflect your unique story. With a passion for design and a commitment to flawless execution, we turn visions into breathtaking realities.</p>
                            <p>Our team believes that the magic lies in the unseen details: the perfect lighting, the aroma of fresh florals, and the seamless flow of celebration. Since our founding, we've curated over 300+ unforgettable experiences across the globe.</p>
                        </div>

                        <div className="info-grid">
                            <div className="info-card">
                                <i className="fas fa-gem" />
                                <div><span>custom Design</span><small> creative moodboards & unique concepts</small></div>
                            </div>
                            <div className="info-card">
                                <i className="fas fa-hand-sparkles" />
                                <div><span>Easy Planning</span><small> Dedicated coordinators</small></div>
                            </div>
                            <div className="info-card">
                                <i className="fas fa-calendar-check" />
                                <div><span> Full execution</span><small> Venue, decor, catering, & more</small></div>
                            </div>
                            <div className="info-card">
                                <i className="fas fa-map-marked-alt" />
                                <div><span>Global expertise</span><small>Beach, palace, or cities</small></div>
                            </div>
                        </div>

                        <div className="quote-section">
                            <p><i className="fas fa-quote-left" style={{ marginRight: 10, color: '#cfa668' }} /> We don't just plan events — we craft emotional journeys. Every celebration is a masterpiece of love, joy, and elegance.</p>
                        </div>

                        <div className="contact-mini">
                            <Link to="/contact" className="btn-outline"><i className="fas fa-calendar-alt" /> Book a consultation</Link>
                            <a href="mailto:Sol.eventsplanner@gmail.com"><i className="fas fa-envelope" />Sol.eventsplanner@gmail.com</a>
                            <a href="tel:+96103173784"><i className="fas fa-phone-alt" /> +961 03173784</a>
                        </div>

                        <div className="services-hint">
                            <i className="fas fa-ring" /> Destination Wedding · 
                            <i className="fas fa-briefcase" /> Corporate Events · 
                            <i className="fas fa-glass-cheers" /> Private Parties · 
                            <i className="fas fa-heart" /> Wedding
                        </div>
                    </div>
                </div>
            </main>
    );
}

export default About;