'use client';
import React, { useState, useRef } from "react";
import styles from "./gallery.module.css";
import Rightarrow from "../../../public/Galleryimages/arrowright.svg";
import Lefttarrow from "../../../public/Galleryimages/arrowleft.svg";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

const images = [
  "/Galleryimages/Pressure Part-img1.png",
  "/Galleryimages/Pressure Part-img2.png",
  "/Galleryimages/Pressure Part-img3.png",
  "/Galleryimages/Pressure Part-img4.png",
  "/Galleryimages/Pressure Part-img5.png",
  "/Galleryimages/Non Pressure Part-img1.png",
  "/Galleryimages/Non Pressure Part-img2.png",
  "/Galleryimages/Non Pressure Part-img3.png",
  "/Galleryimages/Non Pressure Part-img4.png",
  "/Galleryimages/Non Pressure Part-img5.png",
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the next image
  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Navigate to the previous image
  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Swipe handlers for touch and mouse gestures
  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextImage, // Swipe left to move to the next image
    onSwipedRight: prevImage, // Swipe right to move to the previous image
    trackMouse: false, // Disable mouse swipes (we'll handle mouse drag manually)
    trackTouch: true, // Enable touch swipes for mobile
  });

  // Mouse event handlers for click-and-drag navigation
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startX;
    if (deltaX > 50) {
      // Drag right
      prevImage();
      setIsDragging(false);
    } else if (deltaX < -50) {
      // Drag left
      nextImage();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Ensure that the visibleImages array always contains 5 images
  const visibleImages = [];
  for (let i = 0; i < 5; i++) {
    const index = (currentIndex + i) % images.length;
    visibleImages.push(images[index]);
  }

  return (
    <div
      className={styles.container}
      {...swipeHandlers} // Swipe gestures for mobile
      onMouseDown={handleMouseDown} // Mouse drag for desktop
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Stop dragging if mouse leaves the container
    >
      {/* First Div */}
      <div className={styles.textContainer}>
        <p className={styles.heading1}>Gallery</p>
        <p className={styles.heading2}>On Going and Completed Projects</p>
      </div>

      {/* Second Div */}
      <div className={styles.galleryContainer}>
        {/* Left Arrow */}
        <button
          className={styles.arrowButton}
          onClick={prevImage}
          disabled={currentIndex === 0}
        >
          <Image src={Lefttarrow} alt="Left Arrow" />
        </button>

        {/* Image Row */}
        <div className={styles.imageRow}>
          {visibleImages.map((src, index) => {
            let imgClass = "";
            if (index === 0) imgClass = styles.cornerImage;
            else if (index === 1 || index === 3) imgClass = styles.sideImage;
            else if (index === 2) imgClass = styles.centerImage;
            else if (index === 4) imgClass = styles.cornerImage;

            return (
              <img
                key={src}
                src={src}
                alt={`Gallery image ${index + 1}`}
                className={`${styles.image} ${imgClass}`}
              />
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          className={styles.arrowButton}
          onClick={nextImage}
          disabled={currentIndex >= images.length - 1}
        >
          <Image src={Rightarrow} alt="Right Arrow" />
        </button>
      </div>
    </div>
  );
};

export default Gallery;