import { useState, useEffect } from 'react';
import './Reviews.css';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Michael T.',
    img: 'https://placehold.co/100x100/1A1A1A/D90429?text=MT',
    text: '"Absolutely incredible experience. Marcus took my vague idea and turned it into a masterpiece. The studio is impeccably clean and the vibe is perfect."',
    rating: 5
  },
  {
    id: 2,
    name: 'Sarah W.',
    img: 'https://placehold.co/100x100/1A1A1A/D90429?text=SW',
    text: '"Elena is a genius with fine lines. My floral piece is delicate and exactly what I wanted. Worth every penny. Highly recommend INKSTORY!"',
    rating: 5
  },
  {
    id: 3,
    name: 'David L.',
    img: 'https://placehold.co/100x100/1A1A1A/D90429?text=DL',
    text: '"Got my first tattoo here. The artists were super patient and explained the whole process. Very professional luxury setup."',
    rating: 5
  }
];

const Reviews = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === reviews.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? reviews.length - 1 : current - 1);

  return (
    <section id="reviews" className="section-padding reviews-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Client <span className="text-red">Stories</span></h2>
          <p className="section-subtitle">Don't just take our word for it.</p>
        </div>

        <div className="reviews-slider">
          <button className="slider-btn prev" onClick={prevSlide}><ChevronLeft size={30} /></button>
          
          <div className="slider-container">
            {reviews.map((review, index) => (
              <div 
                key={review.id} 
                className={`review-slide ${index === current ? 'active' : ''}`}
                style={{ transform: `translateX(${100 * (index - current)}%)` }}
              >
                <div className="review-card">
                  <div className="stars">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} size={20} fill="var(--red)" color="var(--red)" />)}
                  </div>
                  <p className="review-text">{review.text}</p>
                  <div className="review-author">
                    <img src={review.img} alt={review.name} />
                    <h4>{review.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-btn next" onClick={nextSlide}><ChevronRight size={30} /></button>
        </div>
        
        <div className="slider-dots">
          {reviews.map((_, idx) => (
            <div 
              key={idx} 
              className={`dot ${idx === current ? 'active' : ''}`}
              onClick={() => setCurrent(idx)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
