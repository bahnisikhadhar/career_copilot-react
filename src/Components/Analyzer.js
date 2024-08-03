import React from 'react'
import Charts from './Charts'
import GeoDataJobCount from './GeoDataJobCount'
import TopCompanies from './TopCompanies'
import { Link, useLocation } from 'react-router-dom'
import { countryKeyMap } from "../utils/constants";
import styles from './styles/Analyzer.module.css';

const Analyzer = () => {
    const location =useLocation()
    const searchTerm = new URLSearchParams(location.search).get("searchTerm")
    console.log(searchTerm)
    const Category = new URLSearchParams(location.search).get("category")
    console.log(Category)
    const countryKey = countryKeyMap[searchTerm]
  return (
    <div>
     <h1 className={styles.h1Heading}>Analyze The Job Trends Before Apply</h1>
      <div className={styles.histogram}>
        <Charts countryKey = {countryKey} category = {Category}/>
      </div>

      <div className={styles.button}>
        <Link to={`/jobs?searchTerm=${searchTerm}&category=${Category}`} style={{textDecoration:'none',color:'white'}}>Click To Start Applying</Link>
      </div>
      
      <div className={styles.tables}>
        <div className={styles.topData}>
        <TopCompanies countryKey = {countryKey} category = {Category}/>
        </div>
        <div className={styles.countryData}>
          <GeoDataJobCount countryKey = {countryKey} category = {Category}/>
        </div>
      </div>
    </div>
  )
}

export default Analyzer