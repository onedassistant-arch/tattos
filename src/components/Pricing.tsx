import './Pricing.css';
import { CheckCircle2 } from 'lucide-react';
import AnimatedNumber from './AnimatedNumber';

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding pricing-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Transparent <span className="text-red">Pricing</span></h2>
          <p className="section-subtitle">
            Premium quality artistry at fair, transparent prices. Final cost depends on design complexity, placement, and time required.
          </p>
        </div>

        <div className="pricing-grid">
          
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Small Tattoo</h3>
              <p className="price"><span>Starting from</span> <AnimatedNumber prefix="₹" end={999} /></p>
            </div>
            <ul className="pricing-features">
              <li><CheckCircle2 size={18} className="check-icon" /> Under 3x3 inches</li>
              <li><CheckCircle2 size={18} className="check-icon" /> Simple linework</li>
              <li><CheckCircle2 size={18} className="check-icon" /> Minimal shading</li>
              <li><CheckCircle2 size={18} className="check-icon" /> ~1 Hour Session</li>
            </ul>
            <button className="btn-secondary">Get Quote</button>
          </div>

          <div className="pricing-card popular">
            <div className="popular-badge">Most Popular</div>
            <div className="pricing-header">
              <h3>Medium Tattoo</h3>
              <p className="price"><span>Starting from</span> <AnimatedNumber prefix="₹" end={2999} /></p>
            </div>
            <ul className="pricing-features">
              <li><CheckCircle2 size={18} className="check-icon" /> Up to 6x6 inches</li>
              <li><CheckCircle2 size={18} className="check-icon" /> Detailed design</li>
              <li><CheckCircle2 size={18} className="check-icon" /> Color or Black/Grey</li>
              <li><CheckCircle2 size={18} className="check-icon" /> 2-4 Hour Session</li>
            </ul>
            <button className="btn-primary">Get Quote</button>
          </div>

          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Large Tattoo</h3>
              <p className="price"><span>Starting from</span> <AnimatedNumber prefix="₹" end={6999} /></p>
            </div>
            <ul className="pricing-features">
              <li><CheckCircle2 size={18} className="check-icon" /> Half-sleeves, Back pieces</li>
              <li><CheckCircle2 size={18} className="check-icon" /> High complexity</li>
              <li><CheckCircle2 size={18} className="check-icon" /> Custom artwork</li>
              <li><CheckCircle2 size={18} className="check-icon" /> Multiple Sessions</li>
            </ul>
            <button className="btn-secondary">Get Quote</button>
          </div>

        </div>
        
        <div className="custom-quote text-center">
          <h3>Need a Custom Masterpiece?</h3>
          <p>Contact us with your idea for a personalized consultation and estimate.</p>
          <a href="#booking" className="btn-primary">Request Custom Quote</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
