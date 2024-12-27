import React, { useState } from 'react';
import styles from './box7.module.css';

const Box7: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const boxes = [
    { icon: "/Aboutimages/About-whychoose-icon1.svg", text: 'Customer Loyalty & Transparency Card image cap' },
    { icon:  "/Aboutimages/About-whychoose-icon2.svg", text: 'Hassle Free Execution' },
    { icon:  "/Aboutimages/About-whychoose-icon3.svg", text: 'Global Business Strategy' },
    { icon:  "/Aboutimages/About-whychoose-icon4.svg", text: 'On Time Project Delivery' },
    { icon:  "/Aboutimages/About-whychoose-icon5.svg", text: 'Customer Loyalty & Transparency Card image cap' },
    { icon:  "/Aboutimages/About-whychoose-icon6.svg", text: 'Perfection Reassured' },
    { icon:  "/Aboutimages/About-whychoose-icon7.svg", text: 'Excellence in Problem Solving' },
    { icon:  "/Aboutimages/About-whychoose-icon8.svg", text: 'Promising Expertise' },
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
