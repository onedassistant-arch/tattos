import './Instagram.css';
import { InstagramIcon } from './SocialIcons';

import img1 from '../assets/portfolio_1_1781346064975.png';
import img2 from '../assets/artist_2_1781346171582.png';
import img3 from '../assets/style_fineline_1781347097774.png';
import img4 from '../assets/portfolio_4_1781346107864.png';

const Instagram = () => {
  const posts = [img1, img2, img3, img4];

  return (
    <section className="instagram-section section-padding">
      <div className="instagram-header text-center" style={{ marginBottom: '40px' }}>
        <h2 className="section-title">Follow Us on <span className="text-red">Instagram</span></h2>
        <p className="section-subtitle">@tattoocenter</p>
      </div>
      <div className="instagram-grid">
        {posts.map((img, index) => (
          <div key={index} className="instagram-item">
            <img src={img} alt={`Instagram Post ${index + 1}`} />
            <div className="instagram-overlay">
              <div className="instagram-icon-wrapper">
                <InstagramIcon size={48} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center" style={{ marginTop: '50px' }}>
         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Instagram</a>
      </div>
    </section>
  );
};

export default Instagram;
