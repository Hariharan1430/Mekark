"use client";
import Image from "next/image";
import styles from "./box4.module.css";
import Arrow from "../../../public/FaqImages/arrow-right.svg";

const testimonials = [
  {
    name: "Albert Flores",
    role: "Founder of GearUp",
    image: "/FaqImages/Faqmodel1.png",
    videoLink: "https://www.youtube.com/watch?v=HO9W6ntA9JE",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder of Womenia",
    image: "/FaqImages/Faqmodel2.png",
    videoLink: "https://www.youtube.com/watch?v=ychdAPBGvQU",
  },
  {
    name: "Courtney Henry",
    role: "Founder of CH Beauty",
    image: "/FaqImages/Faqmodel3.png",
    videoLink: "https://www.youtube.com/watch?v=HO9W6ntA9JE",
  },
];

const FaqTestimonials = () => {
  const handleCardClick = (videoUrl: string) => {
    window.open(videoUrl, "_blank"); // Opens the YouTube video in a new tab
  };

  return (
    <div className={styles.box4}>
      {/* Heading Section */}
      <div className={styles.headingContainer}>
        <h3>Over 1000+ people trust us</h3>
        <p>
          Mekark provides the essential building blocks and components to create
          a professional website, project showcase, or admin panel for your
          construction and engineering solutions.
        </p>
      </div>

      {/* Image Boxes */}
      <div className={styles.testimonialsContainer}>
        {testimonials.map((person, index) => (
          <div
            key={index}
            className={`${styles.card} ${
              index === 1 ? styles.centerCard : styles.sideCard
            }`}
            onClick={() => handleCardClick(person.videoLink)}
          >
            <Image
              src={person.image}
              alt={person.name}
              width={300}
              height={400}
              className={styles.image}
            />

            {/* Name & Role */}
            <div className={styles.info}>
              <h3>{person.name}</h3>
              <p>{person.role}</p>
            </div>

            {/* Play Button */}
            <div className={styles.playButton}>▶</div>
          </div>
        ))}
      </div>

      {/* Reviews Link */}
      <div className={styles.reviewLink}>
        <a href="#" className={styles.linkText}>
          See all reviews by our customers
          <Image src={Arrow} alt="Arrow" width={20} height={20} />
        </a>
      </div>
    </div>
  );
};

export default FaqTestimonials;
