import './Styles.css';

import blackwork from '../assets/style_blackwork_1781347072018.png';
import realism from '../assets/portfolio_2_1781346076617.png';
import traditional from '../assets/portfolio_3_1781346094658.png';
import japanese from '../assets/portfolio_6_1781346137589.png';
import tribal from '../assets/style_tribal_1781347083169.png';
import geometric from '../assets/portfolio_5_1781346124902.png';
import minimalist from '../assets/portfolio_4_1781346107864.png';
import fineline from '../assets/style_fineline_1781347097774.png';

const tattooStyles = [
  { name: 'Blackwork', desc: 'Bold, pure black ink designs.', img: blackwork },
  { name: 'Realism', desc: 'Lifelike portraits and imagery.', img: realism },
  { name: 'Traditional', desc: 'Classic bold lines and colors.', img: traditional },
  { name: 'Japanese', desc: 'Irezumi and Asian motifs.', img: japanese },
  { name: 'Tribal', desc: 'Ancient patterns and linework.', img: tribal },
  { name: 'Geometric', desc: 'Symmetrical and intricate shapes.', img: geometric },
  { name: 'Minimalist', desc: 'Simple, clean, and elegant.', img: minimalist },
  { name: 'Fine Line', desc: 'Delicate, thin, and subtle art.', img: fineline }
];

const Styles = () => {
  return (
    <section id="styles" className="section-padding styles-section">
      <div className="container text-center">
        <h2 className="section-title">Featured <span className="text-red">Styles</span></h2>
        <p className="section-subtitle">
          From bold traditional to delicate fine line, our artists specialize in a wide range of styles to bring your vision to life.
        </p>
        
        <div className="styles-grid">
          {tattooStyles.map((style, index) => (
            <div key={index} className="style-card">
              <img src={style.img} alt={style.name} className="style-bg" />
              <div className="style-overlay"></div>
              <div className="style-content">
                <h3>{style.name}</h3>
                <p>{style.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Styles;
