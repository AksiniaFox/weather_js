import { useState } from 'react';
import './WeatherCarousel.css';
import weatherImages from '../../assets/icons/weather/Weather_condition.jsx';

const WeatherCarousel = ({ data }) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>❮</button>
      <div className="carousel-container">
        <div className="carousel-slide" style={{ transform: `translateX(${-index * 200}px)` }}>
          {data.map((item, idx) => (
            <div className="weather-block" key={idx}>
              <h3>{item.time}</h3>
              <img src = {weatherImages[item.condition]} className='logo_small' alt=''/>
              <p>{item.condition}</p>
              <p>{Math.round(item.temperature)}°C</p>
            </div>
          ))}
        </div>
      </div>
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default WeatherCarousel;
