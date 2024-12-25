import React, { useState } from "react";
import styles from "./box8.module.css";
import Leftarrow from "../../../public/HomeImages/Leftarrow.svg";
import Rightarrow from "../../../public/HomeImages/arrow-right.svg";
import Image from "next/image";
const testimonials = [
  {
    photo: "/HomeImages/TestimonialImge.svg", 
    title: "Highly satisfied with the whole work",
    content:
      "We have faced issue of car parking problems in our company. Less space. My friend recommended Mekark. I contacted Mekark and gave him this project. They solve this problem through their automatic parking system. We were extremely happy with the car park. All in all great service!",
    author: "Kellie - Graphic Designer",
  },
  {
    photo: "/HomeImages/TestimonialImge.svg",
    title: "Exceptional Service and Quality",
    content:
      "Working with Mekark was a pleasure. The professionalism and delivery of results exceeded my expectations. They helped streamline our workflow!",
    author: "John - Project Manager",
  },
  {
    photo: "/HomeImages/TestimonialImge.svg",
    title: "Highly Recommend",
    content:
      "The team delivered a world-class car park system for our limited space. It saved our business time and energy. Great work!",
    author: "Susan - Business Owner",
  },
];

const TestimonialBox = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const { photo, title, content, author } = testimonials[currentIndex];

  return (
    <div className={styles.container}>
      {/* Box 8 */}
      <div className={styles.box8}>
        {/* First Div */}
        <div className={styles.headingBox}>
          <p className={styles.subHeading}>Testimonials</p>
          <h2 className={styles.mainHeading}>What People say's about us</h2>
        </div>

        {/* Second Div - Image */}
        <div className={styles.imageBox}>
          <div className={styles.imageBorder}>
            <img src={photo} alt="Profile" className={styles.profileImage} />
          </div>
        </div>

        {/* Third Div - Testimonial Box */}
        <div className={styles.testimonialBox}>
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className={`${styles.arrow} ${
              currentIndex === 0 ? styles.disabledArrow : ""
            }`}
            disabled={currentIndex === 0}
          >
            <Image src={Leftarrow} alt="Left Arrow" />
          </button>

          {/* Center Content */}
          <div className={styles.centerContent}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.content}>{content}</p>
            <p className={styles.author}>{author}</p>
            <span className={styles.underline}></span>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className={`${styles.arrow} ${
              currentIndex === testimonials.length - 1 ? styles.disabledArrow : ""
            }`}
            disabled={currentIndex === testimonials.length - 1}
          >
            <Image src={Rightarrow} alt="Right Arrow" />
          </button>
        </div>
   
      </div>
      

    </div>
  );
};

export default TestimonialBox;
