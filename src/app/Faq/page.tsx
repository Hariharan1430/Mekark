'use client';
import React from 'react'
import styles from "./faq.module.css"
import Image from 'next/image';
import SearchboxIcon from "../../../public/FaqImages/magnifyingglass.svg"
import OutlineImage from '../../../public/FaqImages/faq-outline.svg'
import { useRouter } from 'next/navigation';
import Box4 from './box4'

const faqData = [
    {
      id: 1,
      icon: '/FaqImages/faq-icon1.svg', // Change with your local image path
      question: 'What does Mekark Structure Pvt Ltd specialize in?',
      answer: 'We specialize in Pre-Engineered Buildings, Prefabricated Structures, Multi-Level Car Parking, MEP Services, Multi-Storey Steel Buildings, Civil Construction, and Warehouses.'
    },
    {
      id: 2,
      icon:  '/FaqImages/faq-icon2.svg',
      question: 'Do you provide custom designs for buildings?',
      answer: 'Yes, we offer tailored designs based on client requirements, ensuring structural efficiency and aesthetic appeal.'
    },
    {
      id: 3,
      icon:  '/FaqImages/faq-icon3.svg',
      question: 'How long does it take to complete a project?',
      answer: 'Project timelines vary based on size and complexity, but we always strive for on-time delivery.'
    },
    {
      id: 4,
      icon:  '/FaqImages/faq-icon4.svg',
      question: 'How long does it take to complete a project?',
      answer: 'Project timelines vary based on size and complexity, but we always strive for on-time delivery.'
    },
    {
      id: 5,
      icon:  '/FaqImages/faq-icon5.svg',
      question: 'How long does it take to complete a project?',
      answer: 'Project timelines vary based on size and complexity, but we always strive for on-time delivery.'
    },
    {
      id: 6,
      icon:  '/FaqImages/faq-icon6.svg',
      question: 'How long does it take to complete a project?',
      answer: 'Project timelines vary based on size and complexity, but we always strive for on-time delivery.'
    }
  ];
const Faqpage = () => {
    const router = useRouter();

  return (
    <div className={styles.container}>
       {/* Box1 */}

    <div className={styles.box1}>
      <div className={styles.overlay}>
        {/* Subheading */}
        <p className={styles.subheading}>FAQ’s</p>
        {/* Heading */}
        <p className={styles.heading}>Ask us anything</p>
        {/* Search Box */}
        <div className={styles.searchBox}>
          <div className={styles.searchIcon}>
            <Image src={SearchboxIcon} alt="Search Icon" width={20} height={20} />
          </div>
          <input type="text" placeholder="Search" className={styles.searchInput}  />
        </div>
      </div>
    </div>
       {/* Box2 */}

    <div className={styles.box2}>
      {faqData.map((item) => (
        <div key={item.id} className={styles.faqContainer}>
          <Image src={item.icon} alt="FAQ Icon" width={50} height={50} className={styles.icon} />
          <p className={styles.question}>{item.question}</p>
          <p className={styles.answer}>{item.answer}</p>
        </div>
      ))}
    </div>


      {/* Box3 */}

    <div className={styles.box3}>
      {/* Left Box - Text Content */}
      <div className={styles.leftBox}>
        <p className={styles.heading}>Still have a question?</p>
        <p className={styles.text}>
          Can’t find the answer you’re looking for? Please contact our friendly team.
        </p>
      </div>

      {/* Right Box - Image and Button */}
      <div className={styles.rightBox}>
        <div className={styles.imageWrapper}>
          <Image src={OutlineImage} alt="Engineer" width={150} height={150} className={styles.image} />
        </div>
        <button className={styles.button} onClick={() => router.push('/Contact')}>
          Get in touch
        </button>
      </div>
    </div>

    <Box4 />


  </div>
  
);
};
export default Faqpage