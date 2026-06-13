import './Booking.css';
import heroBg from '../assets/hero_bg.png';

const Booking = () => {
  return (
    <section id="booking" className="section-padding booking-section" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="booking-overlay"></div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="booking-wrapper">
          <div className="booking-info">
            <h2 className="section-title">Book Your <span className="text-red">Session</span></h2>
            <p className="booking-desc">
              Ready to get inked? Fill out the form with your details, preferred artist, and a description of your design. We'll get back to you with a consultation date and quote.
            </p>
            <div className="booking-contact-info">
              <p><strong>Email:</strong> booking@inkstory.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Location:</strong> 123 Art District, NY 10001</p>
            </div>
          </div>

          <div className="booking-form-container">
            <form className="luxury-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" required />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label>Preferred Artist</label>
                  <select required>
                    <option value="">Select Artist</option>
                    <option value="marcus">Marcus "Ink" Vance</option>
                    <option value="elena">Elena Rostova</option>
                    <option value="jax">Jax Thorne</option>
                    <option value="sarah">Sarah Chen</option>
                    <option value="any">Any Available Artist</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Tattoo Type / Style</label>
                  <input type="text" placeholder="e.g. Realism Sleeve" required />
                </div>
                <div className="form-group">
                  <label>Preferred Date</label>
                  <input type="date" required />
                </div>
              </div>

              <div className="form-group">
                <label>Design Description</label>
                <textarea rows={4} placeholder="Describe your idea in detail..." required></textarea>
              </div>

              <div className="form-group">
                <label>Reference Image (Optional)</label>
                <div className="file-upload">
                  <input type="file" id="reference" accept="image/*" />
                  <label htmlFor="reference">Choose File</label>
                  <span className="file-name">No file chosen</span>
                </div>
              </div>

              <button type="submit" className="btn-primary submit-btn">Request Appointment</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
