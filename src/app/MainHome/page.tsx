'use client'
import styles from "./mainHome.module.css"; 
import arrow from "../../../public/HomeImages/Quote Button Icon.svg"
import Image from "next/image";
import Cardimage1 from "../../../public/HomeImages/H4.1.svg"
import Cardimage2 from "../../../public/HomeImages/H4.2.svg"
import Cardimage3 from "../../../public/HomeImages/H4.3.svg"
import Cardimage4 from "../../../public/HomeImages/H4.4.svg"
import BuildingImage from "../../../public/HomeImages/FrameforImage.svg";
import Box6 from "./box6"
import Box7 from "./box7"
import Box8 from "./box8"
import Box9 from "./box9";



export default function Home() {

  return (
    <div className={styles.container}>
  
      {/* Box1 */}
      <div className={styles.box1}>
      {/* Background Image */}
      <div className={styles.backgroundImage1}></div>

      {/* Overlay Area (Circles with Text and Button) */}
      <div className={styles.overlayWrapper1}>
   
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        {/* Content Inside Circles */}
        <div className={styles.contentWrapper1}>
          <h2 className={styles.heading1}>We design & </h2>
          <h2 className={styles.heading11}>
            create elegantly</h2>
          <p className={styles.description1}>
            Looking for a quality and affordable</p>
            <p className={styles.description11}>
             constructor for your next project
          </p>
          <button className={styles.productbutton}>
      Our Product
      <Image src={arrow} alt="arrow" />
    </button>
        </div>
      </div>
    </div>

     {/* Box2 */}
       <div className={styles.box2}>

  <div className={styles.textdiv2}>
    <p>Fast And Reliable Service For Your Project Or A Quick Fix, We Do It All!</p>
  </div>
  <div className={styles.buttondiv2}>
    <button className={styles.custombutton2}>
      Get Quote
      <Image src={arrow} alt="arrow" />
    </button>
  </div>
</div> 

     {/* Box3 */}
  <div className={styles.box3}>
   
      <div className={styles.content3}>
        <p className={styles.subheading3}>Why Choose Mekark for</p>
        <p className={styles.heading3}>PEB Manufacturer?</p>
        <p className={styles.description3}>
          Mekark is a company that specializes in designing, manufacturing and constructing
          pre-engineered buildings for various industries.
        </p>
      </div>
   
    </div> 
    
     {/* Box4 */}
      <div className={styles.box4}>
        <div className={styles.card4}>
          <div className={styles.imageContainer4}>
            <Image src={Cardimage1} alt="Professional Team" width={80} height={80} />
          </div>
          <p className={styles.title4}>Professional Team</p>
          <p className={styles.description4}>
            Mekark has over 25 years in pre-engineered buildings, with a team skilled in the latest design techniques.
          </p>
        </div>
        <div className={styles.card4}>
          <div className={styles.imageContainer4}>
            <Image src={Cardimage2} alt="Customization Options" width={80} height={80} />
          </div>
          <p className={styles.title4}>Customization Options</p>
          <p className={styles.description4}>
            Pre-engineered buildings are cost-effective, and Mekark offers competitive pricing without compromising quality.
          </p>
        </div>
        <div className={styles.card4}>
          <div className={styles.imageContainer4}>
            <Image src={Cardimage3} alt="Cost Effective" width={80} height={80} />
          </div>
          <p className={styles.title4}>Cost-effective</p>
          <p className={styles.description4}>
            Pre-engineered buildings are cost-effective, and Mekark offers competitive pricing without compromising quality.
          </p>
        </div>
        <div className={styles.card4}>
          <div className={styles.imageContainer4}>
            <Image src={Cardimage4} alt="Excellent Service" width={80} height={80} />
          </div>
          <p className={styles.title4}>Excellent Service</p>
          <p className={styles.description4}>
            Mekark is known for excellent service and support from design to delivery.
          </p>
        </div>
      </div>
      
    

     {/* Box5 */}
         <div className={styles.box5}>
      <div className={styles.cornerImageLeft}></div>
      <div className={styles.content5}>
        <p className={styles.mainHeading5}>Manufacturer : Mekark</p>
        <p className={styles.subHeading5}>Pre-engineering Buildings (PEB)</p>
        <div className={styles.imageContainer5}>
          <Image src={BuildingImage}  alt="PEB Design" width={900} height={400} />
        </div>
        <p className={styles.description5}>
          Mekark has become the leading Pre-engineering Buildings (PEB) Manufacturer in Chennai. With our outstanding experience and expertise team, we stand out from our competitors. Pre-engineered buildings (PEB) are now growing as an advanced option in the construction sector.
        </p>
        <button className={styles.readMoreButton5}>Read more</button>
      </div>
      <div className={styles.cornerImageRight}></div>
     
      
    </div>
    
      {/* Box6 */}
       <Box6 />
  
       {/* Box7 */}
      <Box7 />

       {/* Box8 */}

       <Box8 />
            {/* Box9 */}
             <Box9 /> 


    </div>
);
};
