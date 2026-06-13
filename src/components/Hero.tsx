import './Hero.css';
import heroVideo from '../assets/IPA_upload_pani_iruka_img_202606131604.mp4';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <video src={heroVideo} autoPlay loop muted playsInline className="hero-video"></video>
        <div className="overlay"></div>
      </div>
      
      <div className="container hero-content">
        <h1 className="hero-title">Ink Your Story.<br /><span>Wear Your Art.</span></h1>
        <p className="hero-subtitle">
          Professional Custom Tattoos Designed to Last a Lifetime.
        </p>
        <div className="hero-buttons">
          <a href="#booking" className="btn-primary">Book Appointment</a>
          <a href="#portfolio" className="btn-secondary">View Portfolio</a>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
