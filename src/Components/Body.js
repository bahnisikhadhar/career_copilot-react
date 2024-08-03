import { Link } from "react-router-dom";
import { useEffect } from "react";
import styles from "./styles/Body.module.css";
import Slider from "./slider";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Body() {
// ==============================================email part
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ri1ny8k', 'template_pwd5ro1', form.current, 'aaX_Srwmseaq8-3Zw')
        .then((result) => {
            console.log(result.text);
            alert('msg sent')
        }, (error) => {
            console.log(error.text);
        });
    };
    //==============================================email part

    useEffect(() => {
        Aos.init({ duration: 2000, offset: 50 });
    }, [])
    return (
        <div className={styles.container}>
            <section className={styles.first_section}>
                <div className={styles.first_section__left}>
                    <h1>The best jobsite for your <span>Future</span></h1>
                    <p>  We help you to find the best job to build your future and build a better future of digital era.</p>
                </div>
                <div className={styles.first_section__right}>
                    <Slider />
                </div>
            </section>
            {/*********************************************************************************************** */}
            <section className={styles.first_banner}>
                <div className={styles.first_banner__text} data-aos="zoom-in">
                    <h1>Career-Copilot</h1>
                    <p>One-Stop Solution For Your Career </p>
                    <p> Have you tried all our features yet? Scroll down and explore the opportunities</p>
                </div>
            </section>

            {/********************************************************************************************** */}

            <section className={styles.servicesbox}>
                <h1>Services We Provide</h1>
                <div className={styles.serviceContainer}>
                    <div className={styles.services} data-aos="zoom-in">
                        <img src="https://media.istockphoto.com/id/1279104620/photo/top-view-of-a-white-desktop-concept-job-search.jpg?s=170667a&w=0&k=20&c=RzWznQXLJBOD8IiI7jCS-lwzcORxwyG-0GBrH1KmgEI=" alt="" />
                        <div className={styles.servicesHP}>
                            <h2>Job Search</h2>
                            <p>We connect job seekers with employers, and provide career resources.</p>
                        </div>
                        <div className={styles.btn_container}>
                            <Link to="/jobmainpage"><button>Explore more</button></Link>
                        </div>
                    </div>
                    <div className={styles.services} data-aos="zoom-in">
                        <img src="https://previews.123rf.com/images/marish/marish1405/marish140500009/28396675-business-background-with-cv-resume-job-and-meeting-theme-vector-illustration.jpg" alt="" />
                        <div className={styles.servicesHP}>
                            <h2>ResumeBuilder</h2>
                            <p>Create professional resumes easily with customizable templates and helpful tips</p>
                        </div>
                        <div className={styles.btn_container}>
                            <Link to="/resumebuilder"> <button>Explore more</button></Link>
                        </div>
                    </div>
                    <div className={styles.services} data-aos="zoom-in">
                        <img src="https://c0.wallpaperflare.com/preview/237/985/251/laptop-macbook-computer-work.jpg" alt="" />
                        <div className={styles.servicesHP}>
                            <h2>Coding Contest</h2>
                            <p>Multiple coding platforms are here for developers to showcase their skills</p>
                        </div>
                        <div className={styles.btn_container}>
                            <Link to={"/contestmainpage"}><button>Explore more</button></Link>
                        </div>
                    </div>
                    <div className={styles.services} data-aos="zoom-in">
                        <img src="https://static8.depositphotos.com/1006899/1016/i/600/depositphotos_10160146-stock-photo-3d-person-read-newspaper.jpg" alt="" />
                        <div className={styles.servicesHP}>
                            <h2>News</h2>
                            <p>Stay updated on the latest technology news and trends worldwide</p>
                        </div>
                        <div className={styles.btn_container}>
                            <Link to="/newspage"> <button>Explore more</button></Link>
                        </div>
                    </div>

                </div>
            </section>
            {/*************************************************************************************** */}

            <section className={styles.about_container}>
                <div className={styles.abt_Img} data-aos="fade-right">
                    <div className={styles.abt_Img_content}>
                        <h1>Career-Copilot</h1>
                        <p>Your Career Guide</p>
                    </div>
                </div>
                <div className={styles.about_txt} data-aos="fade-left">
                    <h1>Career-Copilot</h1>
                    <p> <b> Career-Copilot </b>is a one-stop destination for job seekers,coding enthusiasts, and professionals looking for career growth. We provide a range of features, including <b>job listings </b> ,<b> coding competition </b> details,<b> employment news</b>, and <b> job analysis </b> to help you make informed decisions and take your career to the next level. Our mission is to empower individuals with the knowledge and resources they need to succeed in the competitive job market.</p>
                </div>

            </section>
            {/******************************************************************************************** */}

            <section className={styles.contact_container} >
                <h1 data-aos="fade-right">Need Help? Any Feedback? Contact with us</h1>
                <form ref={form} onSubmit={sendEmail} data-aos="fade-left">
                    <label>Name</label>
                    <input type="text" name="user_name" placeholder="Enter your name"/>
                    <label>Email</label>
                    <input type="email" name="user_email" placeholder="Enter your email" />
                    <label>Message</label>
                    <textarea name="message" placeholder="your message here"/>
                    <input type="submit" value="Send" className={styles.submitbtn}/>
                </form>
            </section>

        </div>
    )
}