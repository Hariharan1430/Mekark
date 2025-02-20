import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "./box5.module.css";

const images = [
  { src: "/FaqImages/Faqmodel1.png", name: "Leslie Alexander", role: "Co-Founder of Womenia" },
  { src: "/FaqImages/Faqmodel2.png", name: "Courtney Henry", role: "Founder" },
  { src: "/FaqImages/Faqmodel3.png", name: "Brooklyn Simmons", role: "CEO" },
];

const SwipeGallery: React.FC = () => {
  const [index, setIndex] = useState(1); // Start with the middle image in focus

  const handleSwipe = (direction: "left" | "right") => {
    if (direction === "left" && index < images.length - 1) {
      setIndex(index + 1);
    } else if (direction === "right" && index > 0) {
      setIndex(index - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className={styles.container}>
      <h2>Over 1000+ people trust us</h2>
      <p>
        Mekark provides the essential building blocks and components to create a professional website, project showcase, or admin panel for your construction and engineering solutions.
      </p>

      <div className={styles.slider} {...handlers}>
        <div
          className={styles.slides}
          style={{ transform: `translateX(-${index * 33.33}%)` }}
        >
          {images.map((image, i) => (
            <div
              key={i}
              className={`${styles.slide} ${i === index ? styles.active : ""}`}
            >
              <img src={image.src} alt={image.name} />
              <div className={styles.caption}>
                <h3>{image.name}</h3>
                <p>{image.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwipeGallery;
