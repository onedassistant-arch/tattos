import './Footer.css';
import { MapPin, Phone, Mail } from 'lucide-react';
import { InstagramIcon as Instagram, TwitterIcon as Twitter, FacebookIcon as Facebook } from './SocialIcons';

const Footer = () => {
  return (
    <>
      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="section-title">Visit <span className="text-red">Us</span></h2>
              <p className="contact-desc">Drop by our studio for a consultation or just to check out our artists' portfolios in person.</p>
              
              <div className="info-items">
                <div className="info-item">
                  <MapPin className="text-red" size={24} />
                  <div>
                    <h4>Address</h4>
                    <p>123 Art District, New York, NY 10001</p>
                  </div>
                </div>
                <div className="info-item">
                  <Phone className="text-red" size={24} />
                  <div>
                    <h4>Phone</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="info-item">
                  <Mail className="text-red" size={24} />
                  <div>
                    <h4>Email</h4>
                    <p>hello@inkstory.com</p>
                  </div>
                </div>
              </div>

              <div className="contact-actions">
                <a href="#booking" className="btn-primary" style={{ display: 'block', textAlign: 'center', marginBottom: '15px' }}>
                  Book Your Tattoo Today
                </a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="btn-secondary" style={{ display: 'block', textAlign: 'center' }}>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="contact-map">
              <div className="map-placeholder">
                <p>Google Maps Integration Here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            
            <div className="footer-brand">
              <a href="#" className="logo">INK<span>STORY</span></a>
              <p>Premium custom tattoos designed to last a lifetime. Luxury studio environment with world-class artists.</p>
              <div className="social-icons">
                <a href="#"><Instagram size={20} /></a>
                <a href="#"><Twitter size={20} /></a>
                <a href="#"><Facebook size={20} /></a>
              </div>
            </div>

            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Studio</a></li>
                <li><a href="#artists">Our Artists</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>

            <div className="footer-hours">
              <h3>Working Hours</h3>
              <ul className="hours-list">
                <li><span>Monday - Friday</span> <span>10:00 AM - 8:00 PM</span></li>
                <li><span>Saturday</span> <span>11:00 AM - 9:00 PM</span></li>
                <li><span>Sunday</span> <span className="text-red">Closed</span></li>
              </ul>
            </div>

          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} INKSTORY Tattoo Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
