import React from "react";
import styles from "./Hero.module.css"
import NavBar from "./NavBar";

function Hero () {
    return (
        <div id={styles.main_cont}>
            <NavBar />
            <div className={styles.heading}>
                Find Your Dream Job
            </div>
            <div className={styles.sub_heading}>
                Browse through thousands of full-time or part-time jobs near you
            </div>
        </div>
    )
}

export default Hero;