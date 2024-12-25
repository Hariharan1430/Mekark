'use client'
import styles from "./about.module.css"

export default function AboutPage() {

  const boxes = [
    { id: 1, icon: "/Aboutimages/Abouticon1.svg", text: "Pre-Engineered Buildings Manufacturer" },
    { id: 2, icon: "/Aboutimages/Abouticon2.svg", text: "Multi-Storey Steel Building" },
    { id: 3, icon: "/Aboutimages/Abouticon3.svg", text: "Multi Level Car Parking Solutions" },
    { id: 4, icon: "/Aboutimages/Abouticon4.svg", text: "Prefabricated Structure Manufacturer" },
    { id: 5, icon: "/Aboutimages/Abouticon5.svg", text: "MEP Services" },
    { id: 6, icon: "/Aboutimages/Abouticon6.svg", text: "Civil Construction" },
    { id: 7, icon: "/Aboutimages/Abouticon7.svg", text: "Design Services" },
  ];
  return (
    <div className={styles.container}>
      {/* Box1 */}
     <div className={styles.box1}>
      <div className={styles.overlay}>
        <p className={styles.title}>Company Overview</p>
        <p className={styles.subtitle}>
          We create buildings that meet your needs
        </p>
      </div>
    </div>

      {/* Box2 */}
    <div className={styles.box2}>
      <div className={styles.item}>
        <p className={styles.paragraph}>
          &#8226; Mekark Structure Pvt Ltd has been established since 1996, which specializes in manufacturing the Pre-Engineered Buildings, Prefabricated Structure Buildings, Multi Level Car Parking, MEP Services, Multi-storey Steel Building, Civil Construction and Warehouse Constructions.

        </p>
      </div>
      <div className={styles.item}>
        <p className={styles.paragraph}>
          &#8226;Mekark Structure Pvt Ltd, is the leading manufacturer and Supplier for Pre-Engineered Buildings and Prefab Buildings services provider for the past 15 years based in India. We specialize in designing and building structures for a wide range of industries, including commercial, industrial, and residential
        </p>
      </div>
      <div className={styles.item}>
        <p className={styles.paragraph}>
          &#8226;Our team of experienced professionals is committed to delivering exceptional results on time and within budget, while maintaining the highest standards of safety and sustainability.

        </p>
      </div>
      <div className={styles.item}>
        <p className={styles.paragraph}>
          &#8226; 	We have achieved a great number of praises from our customers at home and abroad, because of high-quality steel materials product and professional services.
        </p>
      </div>
    </div>      
    <div className={styles.divider} style={{marginTop:'-1px'}}></div>



      {/* Box3 */}
    <div  className={styles.box3}>
      <p className={styles.titlebox3}>What we do?</p>
      <p className={styles.para1box3}>Our Mekark Expert Team and Consultants provide various</p>
      <p className={styles.para2box3}> industry engineering services such a</p>
      </div>

      {/* Box4 */}

      <div className={styles.box4}>
  <div className={styles.innerContainer}>
    {boxes.map((box) => (
      <div key={box.id} className={styles.box}>
        <div className={styles.iconContainer}>
          {/* Front Face */}
          <img src={box.icon} alt={box.text} className={`${styles.icon} ${styles.iconFront}`} />
          {/* Back Face */}
          <img src={box.icon} alt={`${box.text} Back`} className={`${styles.icon} ${styles.iconBack}`} />
        </div>
        <p className={styles.text}>{box.text}</p>
      </div>
    ))}
  </div>
</div>
    </div>

   
  );
}