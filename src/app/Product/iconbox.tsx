import React, { useState } from 'react';
import styles from './iconbox.module.css';

const Box7: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const boxes = [
    { icon: "/Productimages/icon1.svg", text: 'Air Craft Hangers' },
    { icon:   "/Productimages/icon2.svg", text: 'Metro Stations' },
    { icon:   "/Productimages/icon3.svg", text: 'Show Rooms' },
    { icon:   "/Productimages/icon4.svg", text: 'Gas Stations' },
    { icon:   "/Productimages/icon5.svg", text: 'Vehicle Parking Sheds' },
    { icon:   "/Productimages/icon6.svg", text: 'Schools, Indoor Stadium Roofs' },
    { icon:   "/Productimages/icon7.svg", text: 'Bridges, Railway platform Shelters' },
    { icon:  "/Productimages/icon8.svg", text: 'Factories, Warehouses,Workshops' },
  ];

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'left' && currentSlide === 0) {
      setCurrentSlide(1); 
    } else if (direction === 'right' && currentSlide === 1) {
      setCurrentSlide(0); 
    }
  };

  return (
    <div className={styles.box7}>
        <div  className={styles.heading}>
    <p className={styles.headingtext}>Applications</p>
   
    </div>
      <div className={styles.box7InnerContainer}>
      {/* Web and Tablet Layout */}
      <div className={`${styles.grid} ${styles.desktop}`}>
        {boxes.map((box, index) => (
          <div key={index} className={styles.box}>
            <img src={box.icon} alt={`Icon ${index + 1}`} className={styles.icon} />
            <p className={styles.text}>{box.text}</p>
          </div>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className={`${styles.mobileSlider} ${styles.mobile}`}>
        <div
          className={styles.slides}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* First Container */}
          <div className={styles.slide}>
            {boxes.slice(0, 4).map((box, index) => (
              <div key={index} className={styles.box}>
                <img src={box.icon} alt={`Icon ${index + 1}`} className={styles.icon} />
                <p className={styles.text}>{box.text}</p>
              </div>
            ))}
          </div>

          {/* Second Container */}
          <div className={styles.slide}>
            {boxes.slice(4, 8).map((box, index) => (
              <div key={index + 4} className={styles.box}>
                <img src={box.icon} alt={`Icon ${index + 5}`} className={styles.icon} />
                <p className={styles.text}>{box.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className={styles.navigationDots}>
          <span
            className={`${styles.dot} ${currentSlide === 0 ? styles.activeDot : ''}`}
            onClick={() => setCurrentSlide(0)}
          />
          <span
            className={`${styles.dot} ${currentSlide === 1 ? styles.activeDot : ''}`}
            onClick={() => setCurrentSlide(1)}
          />
        </div>

        {/* Swipe Gesture Handling */}
        <div
          className={styles.swipeArea}
          onTouchStart={(e) => (e.currentTarget.dataset.touchStartX = e.touches[0].clientX.toString())}
          onTouchEnd={(e) => {
            const startX = parseFloat(e.currentTarget.dataset.touchStartX || '0');
            const endX = e.changedTouches[0].clientX;
            if (startX - endX > 50) handleSwipe('left');
            if (endX - startX > 50) handleSwipe('right'); 
          }}
        />
      </div>
      </div>
    </div>
  );
};

export default Box7;
