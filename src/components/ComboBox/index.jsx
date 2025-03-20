import { useState } from 'react';
import './Combobox.scss';
import arrowIcon from '../../assets/arrow.svg'; // Замініть шлях на ваш

export default function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <button className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <img 
          src={arrowIcon} 
          alt="Toggle" 
          className={`arrow ${isOpen ? 'open' : ''}`} 
        />
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        {Array.isArray(content) ? (
          <ul className='no-bullets'>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}