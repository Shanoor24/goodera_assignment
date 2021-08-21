import React from "react"
import Card from "./Card";
import Hero from "./Hero";
import styles from "./MainContainer.module.css"
import SearchBar from "./SearchBar";


function MianContainer() {
    return (
        <div id={styles.main}>
            <Hero />
            <SearchBar />
            <Card />
        </div>
    )
}

export {MianContainer};