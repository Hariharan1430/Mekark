"use client";
import React from "react";
import styles from "./box3.module.css";
import { useRouter } from "next/navigation";

const articles = [
  {
    image: "/Eventsimage/Blogsbox3image6.png",
    title: "Smart Homes: The Future of Living",
    subtitle: "Technology & Innovation",
    date: "March 10, 2023",
  },
  {
    image:  "/Eventsimage/Blogsbox3image5.png",
    title: "Industry 4.0: Revolutionizing Manufacturing",
    subtitle: "Tech & Engineering",
    date: "March 12, 2023",
  },
  {
    image:  "/Eventsimage/Blogsbox3image4.png",
    title: "The Impact of AI on Transportation",
    subtitle: "Automation & Mobility",
    date: "March 15, 2023",
  },
];

const contentData = [
    {
      image: "/Eventsimage/Blogsbox3image1.png",
      title: "Understanding Pre-Engineered Buildings",
      subtitle: "An in-depth look into the innovations shaping tomorrow.",
      description: "A glimpse into the future of technology.",
      heading: "Introduction",
      content:"Technology is evolving at an unprecedented pace, bringing about significant changes in various sectors. This article delves into the key trends and innovations that are expected to shape the future Technology is evolving at an unprecedented pace, bringing about significant changes in various sectors. This article delves into the key trends and innovations that are expected to shape the future",
      link: "/Blogcontent1",
    },
    {
      image: "/Eventsimage/Blogsbox3image2.png",
      title: "Sustainable Architecture and PEBs",
      subtitle: "How green buildings are changing the industry.",
      description: "Exploring eco-friendly solutions in modern engineering.",
      heading: "Introduction",
      content:"Technology is evolving at an unprecedented pace, bringing about significant changes in various sectors. This article delves into the key trends and innovations that are expected to shape the future Technology is evolving at an unprecedented pace, bringing about significant changes in various sectors. This article delves into the key trends and innovations that are expected to shape the future",
      link: "/sustainable-peb",
    },
    {
      image: "/Eventsimage/Blogsbox3image3.png",
      title: "The Future of Smart Factories",
      subtitle: "How AI and automation are revolutionizing production.",
      description: "A deep dive into the impact of Industry 4.0.",
      heading: "Introduction",
      content:"Technology is evolving at an unprecedented pace, bringing about significant changes in various sectors. This article delves into the key trends and innovations that are expected to shape the future  Technology is evolving at an unprecedented pace, bringing about significant changes in various sectors. This article delves into the key trends and innovations that are expected to shape the future",
      link: "/smart-factories",
    },
  ];
  

const Box3: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.box3}>
      {/* First 3 Containers */}
      {contentData.map((item, index) => (
        <div key={index} className={styles.contentBox}>
          {/* Image with Overlay Text */}
          <div
            className={styles.imageContainer}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className={styles.overlay}>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.subtitle}>{item.subtitle}</p>
            </div>
          </div>

          {/* Below Image - Small Description */}
          <p className={styles.description}>{item.description}</p>

          {/* Heading + Content */}
          <p className={styles.heading}>{item.heading}</p>
          <p className={styles.content}>
            {item.content}
            <span
              className={styles.readMore}
              onClick={() => router.push(item.link)}
            >
              {" "}
              Read more...
            </span>
          </p>
        </div>
      ))}

      {/* Related Articles Section */}
      <div className={styles.relatedArticles}>
        <p className={styles.relatedHeading}>Related Articles</p>
        <div className={styles.articleGrid}>
          {articles.map((article, index) => (
            <div key={index} className={styles.articleCard}>
              <img src={article.image} alt={article.title} className={styles.articleImage} />
              <p className={styles.articleTitle}>{article.title}</p>
              <p className={styles.articleSubtitle}>{article.subtitle}</p>
              <p className={styles.articleDate}>{article.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Box3;
