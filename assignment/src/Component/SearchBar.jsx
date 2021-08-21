import React from "react";
import styles from "./SearchBar.module.css"

function SearchBar() {
    return (
        <div id={styles.search_main}>
            <input placeholder="Job title or keyword"/>
            <select name="" id="" className={styles.select}>
                <option value="">Select location</option>
            </select>
            <div>
                <div className={styles.search}>
                    Search
                </div>
            </div>
        </div>
    )
}

export default SearchBar;