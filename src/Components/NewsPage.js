import React, { useEffect, useState } from 'react';
import styles from "./styles/News.module.css";
import placeholder from "../assets/placeholder.jpg";
import Shimmer from './Shimmer';

const NewsPage = () => {
    const [jobNews, setJobNews] = useState([])
    useEffect(() => {
        const jobNews = async () => {
            const data = await fetch("https://newsapi.org/v2/everything?q=employment&from=2024-07-10&to=2024-08-03&sortBy=popularity&apiKey=2a37a4136e984668870242250e6553fd")
            const dataJson = await data.json()
            setJobNews(dataJson.articles)
            console.log(dataJson.articles)
        }
        jobNews()
    }, [])
    return (jobNews.length===0)? <Shimmer/> : (
        <>
            <div className={styles.newsContainer}>
                <h1 className={styles.newspageHeading}>Unlock Your Career Potential: Employment News and Analysis</h1>
                {jobNews && jobNews.map((news) => {
                    const isoDate = news.publishedAt
                    const date = new Date(isoDate)
                    const options = { year: 'numeric', month: 'long', day: 'numeric' };
                    const formattedDate = date.toLocaleDateString('en-US', options);
                    return (
                        <div className={styles.newsCard}>
                        <img src={(news.urlToImage)?news.urlToImage:placeholder} alt="" />
                            <h2>{news.title}</h2>
                            <h3>{news.author}</h3>
                            
                            <p>{news.description}</p>
                            <div className={styles.publish}>
                            <p><b>published at :</b> {formattedDate}</p>
                            </div>
                        </div>
                    )

                })}
            </div>
        </>

    )
}

export default NewsPage
