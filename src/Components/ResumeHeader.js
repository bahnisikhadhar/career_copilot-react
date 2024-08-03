import React from 'react';
import styles from './styles/ResumeHeader.module.css';
import resumeImage from './assets/undraw_online_resume_re_ru7s.png'; 

function ResumeHeader(){
    return(
        <>
        <div className={styles.header_container}>
            <div className={styles.header_left}>
                <p className={styles.header_heading}> A <span className={styles.header_span}>Resume</span> that stands out!</p>
                <p className={styles.header_heading}>Make your own resume. <span className={styles.header_span}>It's free.</span></p>
            </div>

            <div className={styles.header_right}>
                <img src={resumeImage} alt='Resume'/>
            </div>
        </div>
        </>
    )
}
export default ResumeHeader;