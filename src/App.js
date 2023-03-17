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
                  <span className="card-title ms-1 fs-4 fw-bold">ShoppersPartner</span>
                  <p className="card-text text-center my-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis elit in velit fringilla, sit amet dictum sapien hendrerit. Phasellus non libero ac odio pulvinar vestibulum sit amet in massa. Integer aliquam velit vel massa dictum, et euismod quam dignissim. Donec a diam vel dolor venenatis blandit. Curabitur tincidunt ante at nulla posuere vestibulum. Donec lacinia justo eget magna bibendum, a hendrerit tortor fringilla. Duis commodo est vitae libero varius efficitur. Vestibulum non massa commodo, ultricies risus id, commodo lorem. Vestibulum semper lectus tellus, a lacinia massa commodo vel. Donec egestas molestie ex, vel consequat risus malesuada nec. Nulla ullamcorper blandit malesuada. Sed fermentum mi et dui molestie ultricies."</p>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img src='./logo192.png'></img>
                  <span className="card-title ms-1 fs-4 fw-bold">ShoppersPartner</span>
                  <p className="card-text text-center my-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis elit in velit fringilla, sit amet dictum sapien hendrerit. Phasellus non libero ac odio pulvinar vestibulum sit amet in massa. Integer aliquam velit vel massa dictum, et euismod quam dignissim. Donec a diam vel dolor venenatis blandit. Curabitur tincidunt ante at nulla posuere vestibulum. Donec lacinia justo eget magna bibendum, a hendrerit tortor fringilla. Duis commodo est vitae libero varius efficitur. Vestibulum non massa commodo, ultricies risus id, commodo lorem. Vestibulum semper lectus tellus, a lacinia massa commodo vel. Donec egestas molestie ex, vel consequat risus malesuada nec. Nulla ullamcorper blandit malesuada. Sed fermentum mi et dui molestie ultricies."</p>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img src='./logo192.png'></img>
                  <span className="card-title ms-1 fs-4 fw-bold">ShoppersPartner</span>
                  <p className="card-text text-center my-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis elit in velit fringilla, sit amet dictum sapien hendrerit. Phasellus non libero ac odio pulvinar vestibulum sit amet in massa. Integer aliquam velit vel massa dictum, et euismod quam dignissim. Donec a diam vel dolor venenatis blandit. Curabitur tincidunt ante at nulla posuere vestibulum. Donec lacinia justo eget magna bibendum, a hendrerit tortor fringilla. Duis commodo est vitae libero varius efficitur. Vestibulum non massa commodo, ultricies risus id, commodo lorem. Vestibulum semper lectus tellus, a lacinia massa commodo vel. Donec egestas molestie ex, vel consequat risus malesuada nec. Nulla ullamcorper blandit malesuada. Sed fermentum mi et dui molestie ultricies."</p>
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
            <p className="card-text text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis elit in velit fringilla, sit amet dictum sapien hendrerit. Phasellus non libero ac odio pulvinar vestibulum sit amet in massa. Integer aliquam velit vel massa dictum, et euismod quam dignissim. Donec a diam vel dolor venenatis blandit. Curabitur tincidunt ante at nulla posuere vestibulum. Donec lacinia justo eget magna bibendum, a hendrerit tortor fringilla. Duis commodo est vitae libero varius efficitur. Vestibulum non massa commodo, ultricies risus id, commodo lorem. Vestibulum semper lectus tellus, a lacinia massa commodo vel. Donec egestas molestie ex, vel consequat risus malesuada nec. Nulla ullamcorper blandit malesuada. Sed fermentum mi et dui molestie ultricies."</p>
            <p className="card-text text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis elit in velit fringilla, sit amet dictum sapien hendrerit. Phasellus non libero ac odio pulvinar vestibulum sit amet in massa. Integer aliquam velit vel massa dictum, et euismod quam dignissim. Donec a diam vel dolor venenatis blandit. Curabitur tincidunt ante at nulla posuere vestibulum. Donec lacinia justo eget magna bibendum, a hendrerit tortor fringilla. Duis commodo est vitae libero varius efficitur. Vestibulum non massa commodo, ultricies risus id, commodo lorem. Vestibulum semper lectus tellus, a lacinia massa commodo vel. Donec egestas molestie ex, vel consequat risus malesuada nec. Nulla ullamcorper blandit malesuada. Sed fermentum mi et dui molestie ultricies."</p>
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
                  <h3 className="pricing-title">Starter</h3>
                  <p className="pricing-price">$100/month</p>
                </div>
                <ul className="pricing-features">
                  <li>1 campaign per month</li>
                  <li>Up to 5 influencers</li>
                  <li>Basic reporting</li>
                </ul>
              </li>
              <li className="pricing-item">
                <div className="pricing-header">
                  <h3 className="pricing-title">Business</h3>
                  <p className="pricing-price">$500/month</p>
                </div>
                <ul className="pricing-features">
                  <li>3 campaigns per month</li>
                  <li>Up to 20 influencers</li>
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
