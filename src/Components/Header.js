import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles/Header.module.css";
import logo from "./assets/logo1.png";

export default function Header() {
  return (
    <div className={styles.header}>
            <a href="/" className={styles.logo_container}>
            {/* <img src="https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg" alt="logo" className={styles.logo} /> */}
                <img src={logo} alt="logo" className={styles.logo} />
            </a>
           
            <div className={styles.nav_items_container}>
                <ul>
                    <Link to="/" className={styles.nav_items}> <li>   Home  </li> </Link>
                    <Link to="/jobmainpage" className={styles.nav_items}><li>  JobSearch  </li></Link>
                    <Link to="/contestmainpage" className={styles.nav_items}> <li>Contest </li></Link>
                    <Link to="/resumebuilder" className={styles.nav_items}> <li>ResumeBuilder </li></Link>
                    <Link to="/newspage" className={styles.nav_items}> <li>News </li></Link>
                    {/* <button className="nav_items nav_btn">Logout </button>  */}
                    
                </ul>
            </div>
      
    </div>
  )
}
