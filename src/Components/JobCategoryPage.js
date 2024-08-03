import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { countryKeyMap } from "../utils/constants";
import { Link } from 'react-router-dom';
import styles from "./styles/JobCategoryPage.module.css";
import ShimmerSmall from "./ShimmerSmall";

const JobCategories = () => {
    const location = useLocation();
    const [jobCategories, setjobCategories] = useState([]);
    const searchTerm = new URLSearchParams(location.search).get("searchTerm").toLowerCase();

    useEffect(() => {
        const getJobCategories = async () => {
            if (searchTerm) {
                const countryKey = countryKeyMap[searchTerm];
                const endpoint = `https://api.adzuna.com/v1/api/jobs/${countryKey}/categories?app_id=4a19f856&app_key=5d047d2e363e2e043e36902530dd8793`;
                const data = await fetch(endpoint);
                const dataJson = await data.json()
                setjobCategories(dataJson.results)
            }

        }
        getJobCategories()
    }, [searchTerm]);

    return (jobCategories.length===0)? <ShimmerSmall/> : (
        <>

            <h1 className={styles.categoryHeading}>JOB CATEGORIES IN {searchTerm.toUpperCase()}</h1>

            <div className={styles.categoriesContainer}>


                {jobCategories && jobCategories.map((category) => {
                    const { label, tag } = category;
                    return (
                        <Link to={`/analyzer?searchTerm=${searchTerm}&category=${tag}`} key={label} style={{ textDecoration: 'none' }}>
                            <div className={styles.categories}>
                                <h2>{tag.toUpperCase()}</h2>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default JobCategories;

