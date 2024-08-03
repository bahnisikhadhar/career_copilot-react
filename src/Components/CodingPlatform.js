import { useState, useEffect } from "react";
import styles from "../Components/styles/ContestMainPage.module.css";
import { Link, useLocation} from "react-router-dom";
import { contestMapObj } from "../utils/constants";
import Aos from "aos";
import "aos/dist/aos.css";
import Shimmer2 from "./Shimmer2";

export default function Codingplatform(){
    const location = useLocation();
    const codePlatformName = new URLSearchParams(location.search).get("platformName");
    let platformName = new URLSearchParams(location.search).get("platformName").toLowerCase();

    let contestMap = contestMapObj; // got from constants.js
       
       if(platformName in contestMap){
        platformName = contestMap[platformName];
       }
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(false)

    useEffect(() => {
        getApiData();
        Aos.init({duration: 2000, offset:50});
    }, []);

    const getApiData = async () => {
        setIsPending(true);
        const data = await fetch(`https://kontests.net/api/v1/${platformName}`);
        console.log(data)
        const result = await data.json();
        setIsPending(false);
        console.log(result)
        setData(result);
    }

    return (isPending && data.length===0) ? <Shimmer2/> : (
        <div>
            <h1 className={styles.contest_heading}>Welcome to <span>{codePlatformName}</span>  Contest!!! </h1>
            {/* <Iframe url="https://leetcode.com/"/> */}
            <div className={styles.contest_box_container}>
                { (!isPending && data.length===0) ? <h1 style={{color:"white"}}>No Contest Right Now!!!</h1> :
                    data.map((item, index) => {
                        return (
                            <div key={index} className={styles.contest_box} data-aos="flip-right">
                                <h1>{codePlatformName}</h1>
                                <h2>{item.name}</h2>
                                <p>Contest Duration: {Math.floor(Math.floor(item.duration)/3600)} hour </p>
                                <p>Contest Start Date: {(item.start_time.slice(0,10).split("-").reverse().join("-"))}</p>
                                <p>Start Time: {item.start_time.slice(11,19)}</p>
                                <p>Contest End Date:{(item.end_time.slice(0,10).split("-").reverse().join("-"))} </p>
                                <p>End Time: {item.end_time.slice(11,19)}</p>
                                {(item.in_24_hours==="yes") && <p>Contest will start within 24 hours</p>}
                                {(item.status==="CODING") && <p>Contest is Live</p>}
                                <a href={item.url} target="_blank"> <button className={styles.contestBtn}>go to the site</button></a>
                            </div>
                        ) 
                    })
                }
            </div>
        </div>
    )

}