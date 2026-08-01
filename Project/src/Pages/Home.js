import '../Styles/Home.css';
import { Link } from 'react-router-dom';
import ImageOne from '../Img/Image-1.png';
import ImageTwo from '../Img/Image-2.png';
import ImageThree from '../Img/Image-3.jpeg';
import ImageFour from '../Img/Image-4.png';
import ImageFive from '../Img/Image-5.jpeg';
import ImageSix from '../Img/Image-6.jpeg';
import ImageSeven from '../Img/Image-7.jpeg';
import ImageEight from '../Img/Image-8.png';
import ImageNine from '../Img/Image-9.jpeg';
import ImageTen from '../Img/Image-10.jpeg';
import ImageEleven from '../Img/Image-11.png';
import ImageTwelve from '../Img/Image-12.jpeg';
import ImageThirteen from '../Img/Image-13.jpeg';
import ImageFourteen from '../Img/Image-14.jpeg';
import ImageFifteen from '../Img/Image-15.jpeg';

function Home() {
    return (
        <main>

            <section className="hero">
                <div className="background-slider">
                    <div className='slide' style={{ backgroundImage: `url(${ImageOne})`, backgroundSize: 'cover' }}></div>
                    <div className='slide' style={{ backgroundImage: `url(${ImageTwo})`, backgroundSize: 'cover' }}></div>
                    <div className='slide' style={{ backgroundImage: `url(${ImageThree})`, backgroundSize: 'cover' }}></div>
                    <div className='slide' style={{ backgroundImage: `url(${ImageFour})`, backgroundSize: 'cover' }}></div>
                    <div className='slide' style={{ backgroundImage: `url(${ImageFive})`, backgroundSize: 'cover' }}></div>
                    <div className='slide' style={{ backgroundImage: `url(${ImageSix})`, backgroundSize: 'cover' }}></div>
                    <div className='slide' style={{ backgroundImage: `url(${ImageSeven})`, backgroundSize: 'cover' }}></div>
                    <div className='slide' style={{ backgroundImage: `url(${ImageEight})`, backgroundSize: 'cover' }}></div>
                    <div className='slide' style={{ backgroundImage: `url(${ImageNine})`, backgroundSize: 'cover' }}></div>
                    <div className='slide' style={{ backgroundImage: `url(${ImageTen})`, backgroundSize: 'cover' }}></div>
                    <div className='slide' style={{ backgroundImage: `url(${ImageEleven})`, backgroundSize: 'cover' }}></div>
                    <div className='slide' style={{ backgroundImage: `url(${ImageTwelve})`, backgroundSize: 'cover' }}></div>
                    <div className='slide' style={{ backgroundImage: `url(${ImageThirteen})`, backgroundSize: 'cover' }}></div>
                    <div className='slide' style={{ backgroundImage: `url(${ImageFourteen})`, backgroundSize: 'cover' }}></div>
                    <div className='slide' style={{ backgroundImage: `url(${ImageFifteen})`, backgroundSize: 'cover' }}></div>
                </div>

                <div className="hero-text">
                    <h1>Plan Your Perfect Event</h1>
                    <p>We create unforgettable experiences for weddings, parties, and more.</p>
                    <Link to="/register" className="btn">Get Started</Link>
                </div>
            </section>
            <section className="services">
                <h2>Our Services</h2>
                <div className="cards">
                    <div className="card">
                        <h3>Wedding Planning</h3>
                        <p>Elegant and memorable weddings tailored to your vision.</p>
                    </div>

                    <div className="card">
                        <h3>Birthday Events</h3>
                        <p>Fun and creative birthday parties for all ages.</p>
                    </div>

                    <div className="card">
                        <h3>Corporate Events</h3>
                        <p>Professional events that leave a lasting impression.</p>
                    </div>
                </div>
            </section>

            <section className="about">
                <h2>Why Choose Us?</h2>
                <p>
                    We combine creativity, organization, and passion to deliver events
                    that are truly special and stress-free.
                </p>
            </section>
        </main>
    );
}

export default Home;