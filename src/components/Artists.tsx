import './Artists.css';
import { Mail } from 'lucide-react';
import { InstagramIcon as Instagram, TwitterIcon as Twitter } from './SocialIcons';

import a1 from '../assets/artist_1_1781346157456.png';
import a2 from '../assets/artist_2_1781346171582.png';
import a3 from '../assets/artist_3_1781346190344.png';
import a4 from '../assets/artist_4_1781346202438.png';

const artists = [
  {
    name: 'Marcus "Ink" Vance',
    specialty: 'Realism & Portrait',
    exp: '12 Years',
    img: a1
  },
  {
    name: 'Elena Rostova',
    specialty: 'Fine Line & Minimalist',
    exp: '8 Years',
    img: a2
  },
  {
    name: 'Jax Thorne',
    specialty: 'Traditional & Blackwork',
    exp: '15 Years',
    img: a3
  },
  {
    name: 'Sarah Chen',
    specialty: 'Japanese & Color',
    exp: '10 Years',
    img: a4
  }
];

const Artists = () => {
  return (
    <section id="artists" className="section-padding artists-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Meet Our <span className="text-red">Artists</span></h2>
          <p className="section-subtitle">
            World-class talent dedicated to mastering their craft and bringing your stories to life.
          </p>
        </div>

        <div className="artists-grid">
          {artists.map((artist, index) => (
            <div key={index} className="artist-card">
              <div className="artist-img-wrapper">
                <img src={artist.img} alt={artist.name} />
                <div className="artist-socials">
                  <a href="#"><Instagram size={24} /></a>
                  <a href="#"><Twitter size={24} /></a>
                  <a href="#"><Mail size={24} /></a>
                </div>
              </div>
              <div className="artist-info">
                <h3>{artist.name}</h3>
                <p className="specialty">{artist.specialty}</p>
                <p className="exp">Experience: <span>{artist.exp}</span></p>
                <button className="btn-secondary book-artist-btn">Book {artist.name.split(' ')[0]}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artists;
