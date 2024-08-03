import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import { countryKeyMap } from "../utils/constants";
import styles from "./styles/Jobs.module.css";
import Shimmer2 from "./Shimmer2";

const Jobs = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const searchTerm = new URLSearchParams(location.search).get("searchTerm")
    console.log(searchTerm)
    const Category = new URLSearchParams(location.search).get("category")
    const [jobs, setJobs] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [salaryMin, setSalaryMin] = useState('')
    const [isFullTime, setIsFullTime] = useState(false)
    const [isPartTime, setIsPartTime] = useState(false)
    const [isContract, setIsContract] = useState(false)
    const [isPermanent, setIsPermanent] = useState(false)
    const [sortBy, setSortBy] = useState('date')
    const [isSearchEnabled, setIsSearchEnabled] = useState(false)

    const availableJobs = async () => {
        const countryKey = countryKeyMap[searchTerm]
        const filters = [Category && `what=${Category}`, searchQuery && `title_only=${searchQuery}`, salaryMin && `salary_min=${salaryMin}`, isFullTime && `full_time=${isFullTime}`, isPartTime && `part_time=${isPartTime}`, isContract && `contract=${isContract}`, isPermanent && `permanent=${isPermanent}`, `sort_by=${sortBy}`, `results_per_page=150`].filter(Boolean).join('&')

        const data = await fetch(
            `https://api.adzuna.com/v1/api/jobs/${countryKey}/search/1?app_id=4a19f856&app_key=5d047d2e363e2e043e36902530dd8793&${filters}`
        )
        console.log(data)
        const dataJson = await data.json()
        setJobs(dataJson.results)
        console.log(dataJson.results)
    }
    useEffect(() => {
        availableJobs();
    }, [searchTerm, Category])

    const handleSearch = (e) => {
        e.preventDefault();
        setIsSearchEnabled(true);
    }

    useEffect(() => {
        if (isSearchEnabled) {
            availableJobs();
            setIsSearchEnabled(false);
        }
    }, [isSearchEnabled])

    return (jobs.length===0)? <Shimmer2/> :  (
        <div className={styles.jobsContiner}>
            <h1 className={styles.jobsHeading}>These Are The {Category?.toUpperCase()} Available in {searchTerm?.toUpperCase()}</h1>

            <form onSubmit={handleSearch} className={styles.filters}>
                <input type="text" className={styles.jobText} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search by Jobrole" />
                <input type="number" className={styles.jobNumber} value={salaryMin} onChange={(e) => setSalaryMin(e.target.value)} placeholder="Minimum Salary" />
                <label className={styles.label}>
                    Full-time
                    <input type="checkbox" className={styles.jobCheckbox} checked={isFullTime} onChange={() => setIsFullTime(!isFullTime)} />
                </label>
                <label className={styles.label}>
                    Part-time
                    <input type="checkbox" className={styles.jobCheckbox}checked={isPartTime} onChange={() => setIsPartTime(!isPartTime)} />
                </label>
                <label className={styles.label}>
                    Contract
                    <input type="checkbox" className={styles.jobCheckbox}checked={isContract} onChange={() => setIsContract(!isContract)} />
                </label>
                <label className={styles.label}>
                    Permanent
                    <input type="checkbox" className={styles.jobCheckbox}checked={isPermanent} onChange={() => setIsPermanent(!isPermanent)} />
                </label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className={styles.select}>
                    <option value="date">Sort by date</option>
                    <option value="relevance">Sort by relevance</option>
                    <option value="salary">Sort by Salary</option>
                    <option value="hybrid">Hybrid jobs</option>
                </select>
                <button type="submit" className={styles.applyBtn}>Apply Filters</button>
            </form>
            <div className={styles.jobsList}>
            
                <div className={styles.jobCards}>
                    {jobs && jobs.map((job) => {
                        console.log(job)
                        const isoDate = job.created
                        const date = new Date(isoDate)
                        const options = { year: 'numeric', month: 'long', day: 'numeric' };
                        const formattedDate = date.toLocaleDateString('en-US', options);
                        return  (
                            <div key={job.id} className={styles.jobCard}>
                                <h1>{job?.title}</h1>
                                <h2 className={styles.companyName}>{job?.company?.display_name}</h2>
                                <h2>Job Posted:{formattedDate}</h2>
                                <h3 className={styles.location}>{job?.location?.display_name}</h3>
                                {/* <p className={styles.description}>{job?.description}</p> */}
                                <button className={styles.applyBtn} onClick={() => navigate("/jobapply", { state: { message: job } })}>Click Here To Know More And Apply</button>

                            </div>
                        )

                    })}
                </div>
            </div>
        </div>
    )
}

export default Jobs


