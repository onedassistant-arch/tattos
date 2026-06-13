import { useState } from 'react';
import './FAQ.css';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: 'Does it hurt?', a: 'Pain is subjective and varies by placement. However, our artists use the latest techniques to minimize discomfort, and our luxury studio environment is designed to keep you relaxed.' },
  { q: 'How much does it cost?', a: 'Pricing depends on size, detail, and artist. We have starting rates for different sizes, but the best way to get an accurate cost is to request a custom quote or consultation.' },
  { q: 'How long does it take?', a: 'Small tattoos can take under an hour, while large custom pieces may require multiple sessions over several months. Your artist will provide a time estimate during consultation.' },
  { q: 'Is it safe?', a: 'Absolutely. We adhere to the strictest hygiene standards. All our equipment is 100% sterile, single-use, and disposed of properly. Our artists are fully certified.' },
  { q: 'How should I care for my tattoo?', a: 'We provide premium aftercare products and detailed instructions. Generally, keep it clean, moisturized with unscented lotion, and out of direct sunlight while healing.' }
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding faq-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Frequently Asked <span className="text-red">Questions</span></h2>
          <p className="section-subtitle">Got questions? We've got answers.</p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${open === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.q}</h3>
                <span className="faq-icon">
                  {open === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </div>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
