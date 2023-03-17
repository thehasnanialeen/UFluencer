import { useState } from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: '' });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // Perform basic form validation
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Please enter your name';
    }
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) {
      errors.message = 'Please enter a message';
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Send form data to server using fetch API
    try {
      const response = await fetch('/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setFormErrors({});
      } else {
        throw new Error('An error occurred. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      setFormErrors({ server: error.message });
    }
  };

  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header></Header>

      <section className='container'>

        <div className="card testimonial mt-5 shadow" >
          <div className="card-header text-center">
            <h2>What our customers think of us</h2>
          </div>
          <div className='card-body'>
              <Carousel variant='dark' indicators={false}>
                <Carousel.Item interval={3000}>
                  <img src='./logo192.png'></img>
                  <span className="card-title ms-1 fs-4 fw-bold">BrainStorm</span>
                  <p className="card-text text-center my-2">"UFluence has been a game changer for our influencer marketing campaigns. The platform is easy to use and has helped us connect with the right influencers for our brand. The analytics and insights have also been extremely helpful in measuring the success of our campaigns.We've tried several influencer marketing platforms, but UFluence stands out in terms of their customer service and support. The team is always responsive and goes above and beyond to help us achieve our goals."</p>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img src='./logo192.png'></img>
                  <span className="card-title ms-1 fs-4 fw-bold">Superrr</span>
                  <p className="card-text text-center my-2">"UFluence has exceeded our expectations in terms of the quality of influencers we've been able to connect with. The platform is intuitive and user-friendly, and we've seen a significant increase in engagement and conversions since incorporating influencer marketing into our strategy"</p>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img src='./logo192.png'></img>
                  <span className="card-title ms-1 fs-4 fw-bold">Kingfisher Enterprises</span>
                  <p className="card-text text-center my-2">"As a small business, we were hesitant to invest in influencer marketing, but UFluence made it accessible and affordable. We've been able to connect with influencers who align with our values and mission, and the platform has helped us grow our brand in a meaningful way. UFluence has been instrumental in helping us expand our reach and connect with our target audience. The platform's data-driven approach has allowed us to make informed decisions about our influencer campaigns, and we've seen a significant return on investment as a result."</p>
                </Carousel.Item>
            </Carousel>
          </div>
        </div>

        <div className='mt-5'>
          <h4 className='text-end'>Why wait? <button className='userDataButton p-2'><Link to="/userdata">Let's get started</Link></button></h4>
        </div>

        <div id="about" className="card mt-5 shadow">
          <div className="card-header text-center">
            <h2>About us</h2>
          </div>
          <div className='card-body'>
            <p className="card-text text-center">"At UFluence, we believe in the power of influencer marketing to help businesses reach their target audience and achieve their goals, both locally and globally. Our platform was born out of a passion for connecting brands with the right influencers, in a way that is efficient, transparent, and data-driven. Our team is made up of experts in influencer marketing, technology, and customer service. We are dedicated to providing our users with the best possible experience, whether they are based in their local community or expanding to new markets around the world. Our approach is glocal, meaning that we combine global expertise with local knowledge to create tailored solutions for our users."</p>
            <p className="card-text text-center">"We understand that influencer marketing can be intimidating, especially for small businesses or those new to the industry. That's why we've designed UFluence to be user-friendly, intuitive, and accessible to all, regardless of their location. Whether you're a startup looking to boost your social media presence in your local market, or an established brand seeking new ways to connect with audiences on a global scale, UFluence has the tools and resources to help you succeed."</p>
            <p className="card-text text-center">"Above all, we are committed to transparency, integrity, and delivering measurable results for our users. We believe in building long-term partnerships with our customers, and we are always here to provide guidance, support, and expertise every step of the way. Thank you for considering UFluence for your influencer marketing needs. We look forward to helping you achieve your goals and grow your business, both locally and globally, with our glocal approach."</p>
          {/* <a href="#services" className="hero-cta">Learn more</a> */}
          </div>
        </div>

        <div id="services" className="card mt-5 shadow">
          <div className="card-header text-center">
            <h2>Our services</h2>
          </div>
          <div className='card-body'>
            <p className="card-text">We offer a variety of influencer marketing services to help you grow your business:</p>
            <ul className="service-list">
              <li className="service-item">
                <div className="service-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="service-content">
                  <h3 className="service-title">Influencer identification</h3>
                  <p className="service-text">We help you find the right influencers for your brand based on your target audience and budget.</p>
                </div>
              </li>
              <li className="service-item">
                <div className="service-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="service-content">
                  <h3 className="service-title">Campaign management</h3>
                  <p className="service-text">We manage your influencer marketing campaigns from start to finish, ensuring maximum ROI.</p>
                </div>
              </li>
              <li className="service-item">
                <div className="service-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <div className="service-content">
                  <h3 className="service-title">Influencer outreach</h3>
                  <p className="service-text">We handle all communication with influencers on your behalf, making sure they promote your brand effectively.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div id="pricing" className="card mt-5 shadow" >
          <div className="card-header text-center">
            <h2>Our pricing</h2>
          </div>
          <div className='card-body'>
            <p className="card-text text-center">We offer flexible pricing plans to meet the needs of businesses of all sizes:</p>
            <ul className="pricing-list">
              <li className="pricing-item me-3">
                <div className="pricing-header">
                  <h3 className="pricing-title">Basic</h3>
                  <p className="pricing-price">$449.99/month</p>
                </div>
                <ul className="pricing-features">
                  <li>Access to 20 influencers shortlisted for the needs</li>
                  <li>Can choose to interact with 10 influencers</li>
                  <li>Basic reporting</li>
                </ul>
              </li>
              <li className="pricing-item">
                <div className="pricing-header">
                  <h3 className="pricing-title">Premium</h3>
                  <p className="pricing-price">$679.99/month</p>
                </div>
                <ul className="pricing-features">
                  <li>Access to 50 influencers shortlisted for the needs</li>
                  <li>Can choose to interact with 30 influencers</li>
                  <li>Advanced reporting</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer></Footer>
</div>
);
}

export default App;
