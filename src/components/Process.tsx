import './Process.css';
import img1 from '../assets/about_studio_new.png';
import img2 from '../assets/style_fineline_1781347097774.png';
import img3 from '../assets/artist_2_1781346171582.png';
import img4 from '../assets/portfolio_1_1781346064975.png';
import img5 from '../assets/portfolio_4_1781346107864.png';

const steps = [
  { id: 1, title: 'Consultation', desc: 'Discuss your ideas, placement, and sizing with our artists in a comfortable environment.', img: img1 },
  { id: 2, title: 'Design Creation', desc: 'We craft a custom design tailored exactly to your vision, ensuring every detail is perfect.', img: img2 },
  { id: 3, title: 'Approval', desc: 'Review the design with your artist and make any final adjustments before we begin.', img: img3 },
  { id: 4, title: 'Tattoo Session', desc: 'Relax in our sterile luxury studio while we work our magic and bring your art to life.', img: img4 },
  { id: 5, title: 'Aftercare Support', desc: 'Receive detailed instructions and premium aftercare products for perfect healing.', img: img5 }
];

const Process = () => {
  return (
    <section className="process-section">
      <div className="process-header section-padding text-center">
        <h2 className="section-title">The <span className="text-red">Process</span></h2>
        <p className="section-subtitle">Your journey to the perfect tattoo, step by step.</p>
      </div>

      <div className="zigzag-container">
        {steps.map((step, index) => (
          <div key={step.id} className={`zigzag-row ${index % 2 !== 0 ? 'reverse' : ''}`}>
            <div className="zigzag-image parallax-bg" style={{ backgroundImage: `url(${step.img})` }}>
              <div className="parallax-overlay"></div>
            </div>
            <div className="zigzag-text">
              <div className="step-number-large">0{step.id}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
