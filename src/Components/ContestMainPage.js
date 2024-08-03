import { useCallback, useState, useEffect } from "react";
// import styles from "./styles/ContestMainPage.module.css";
import styles from "../Components/styles/ContestMainPage.module.css";
import platforms from "../utils/codeplatformdata";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"; // have to do npm i aos first

export default function ContestMainPage() {
   const codingPlatforms = platforms;
   const [text,setText] = useState(false)
   
       useEffect(()=>{
        Aos.init({duration: 2000, offset:50});
       },[])

      //  useEffect(()=>{
      //   let timeout;
      //   timeout= setTimeout(()=>{
      //     setText(!text);
      //   },3500)
        // timeout= setTimeout(()=>{
        //   setText("Participate in Contest");
        // },2000)
        // timeout= setTimeout(()=>{
        //   setText(" Win prizes");
        // },4000)
      //  },[text])
       
  return(
    <>
    <div className={styles.codingHeading}>
    <span className={styles.codingText}>Choose your Favourite Platform & Participate in Contest</span>
     </div>
    <div className={styles.codingplatformContainer}>
        
      {
        codingPlatforms.map((item)=>{
            return (
                <Link to={`/codingplatform?platformName=${item.name}`} className={styles.codingplatform} key={item.id} data-aos="zoom-in">
                    <p className={styles.platfrmName}>{item.name}</p>
                    <img src={item.imgUrl} alt="" className={styles.platfrmImg}/>
               </Link>
            )
        })
      }
    </div>
    </>
  )
}

