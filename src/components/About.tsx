import './About.css';
import aboutImg from '../assets/about_studio_new.png';
import AnimatedNumber from './AnimatedNumber';

const About = () => {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container about-container">
        
        <div className="about-image">
          <img src={aboutImg} alt="Tattoo Studio Interior" />
        </div>

        <div className="about-content">
          <h2 className="section-title">More Than Just <span className="text-red">Ink</span></h2>
          <p className="about-story">
            Founded in 2014, INKSTORY has been at the forefront of the luxury tattoo movement. 
            We believe that every tattoo is a permanent piece of fine art. Our studio provides 
            a sterile, comfortable, and premium environment where your vision comes to life.
          </p>
          
          <div className="stats-grid">
            <div className="stat-card">
              <h3><AnimatedNumber end={5000} suffix="+" /></h3>
              <p>Tattoos Completed</p>
            </div>
            <div className="stat-card">
              <h3><AnimatedNumber end={10} suffix="+" /></h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-card">
              <h3><AnimatedNumber end={4} /></h3>
              <p>Pro Artists</p>
            </div>
            <div className="stat-card">
              <h3><AnimatedNumber end={100} suffix="%" /></h3>
              <p>Sterile Equipment</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
