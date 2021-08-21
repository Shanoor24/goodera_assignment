import React from "react";
import styles from "./NavBar.module.css"


function NavBar() {
    return (
        <div id={styles.nav_main}>
            <div>JobHunt</div>
            <div>Find Jobs</div>
            <div>Upskill Yourself</div>
            <div>Post a Job</div>
            <div>Sign In</div>
        </div>
    )
}

export default NavBar;