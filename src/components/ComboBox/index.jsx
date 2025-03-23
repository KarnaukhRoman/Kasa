import { useState } from 'react';
import arrowIcon from '../../assets/arrow.svg'; // Замініть шлях на ваш

export default function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="combobox">
      <button className="combobox__header" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <img 
          src={arrowIcon} 
          alt="Toggle" 
          className={`combobox__arrow ${isOpen ? 'combobox__arrow--open' : ''}`} 
        />
      </button>
      <div className={`combobox__content ${isOpen ? 'combobox__content--open' : ''}`}>
        {Array.isArray(content) ? (
          <ul className='combobox__list combobox__list--no-bullets'>
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