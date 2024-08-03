import { useState } from "react";
import { countryData } from "../utils/constants";
import styles from "./styles/LocationSearch.module.css"
import { Link } from "react-router-dom";
const LocationSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false)
  const filteredSuggestions = countryData.filter((country) => {
    const name = Object.values(country)[0].toLowerCase();
    return name.startsWith(searchTerm.toLowerCase());
  });
  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(Object.values(suggestion)[0]);
    setShowSuggestions(false)
  };
  return (
    <div className={styles.container}>
      <h1 style ={{color:"#fff"}}>Find Your Dream Job Over 15 Countries 🥇!!</h1>
      <form className={styles.form}>
        <div className={styles.searchContainer}>
          <input
            className={styles.searchInput}
            type="text"
            required
            placeholder="In which country are you looking for a job?"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }
            }
            onFocus={() => setShowSuggestions(true)}
          // onBlur = {()=>setShowSuggestions(false)}
          />
          {searchTerm && (
            <Link to={`/jobcategories?searchTerm=${searchTerm}`}
              className={styles.searchButton}
              type="submit">
              Search
            </Link>
          )}
        </div>
      </form>
      {showSuggestions && searchTerm && filteredSuggestions.length > 0 && (
        <ul className={styles.suggestions}>
          {filteredSuggestions.map((country, index) => (
            <li
              className={styles.suggestion}
              onClick={() => handleSuggestionClick(country)}
              key={index}
            >
              {Object.values(country)[0]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default LocationSearch;