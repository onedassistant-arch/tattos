import { useState } from 'react';
import './Portfolio.css';

const categories = ['All', 'Sleeve', 'Portrait', 'Color', 'Black & Grey', 'Minimal'];

import p1 from '../assets/portfolio_1_1781346064975.png';
import p2 from '../assets/portfolio_2_1781346076617.png';
import p3 from '../assets/portfolio_3_1781346094658.png';
import p4 from '../assets/portfolio_4_1781346107864.png';
import p5 from '../assets/portfolio_5_1781346124902.png';
import p6 from '../assets/portfolio_6_1781346137589.png';

const portfolioItems = [
  { id: 1, category: 'Sleeve', img: p1 },
  { id: 2, category: 'Portrait', img: p2 },
  { id: 3, category: 'Color', img: p3 },
  { id: 4, category: 'Black & Grey', img: p4 },
  { id: 5, category: 'Minimal', img: p5 },
  { id: 6, category: 'Sleeve', img: p6 }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding portfolio-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Our <span className="text-red">Portfolio</span></h2>
          <p className="section-subtitle">
            Explore our latest masterpieces and get inspired for your next tattoo.
          </p>
        </div>

        <div className="portfolio-filters">
          {categories.map((cat, idx) => (
            <button 
              key={idx} 
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="masonry-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="masonry-item">
              <img src={item.img} alt={item.category} />
              <div className="portfolio-overlay">
                <span className="portfolio-category">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center" style={{ marginTop: '40px' }}>
          <button className="btn-secondary">View Full Gallery</button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
