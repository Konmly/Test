import React from "react";
import styles from "./styles.module.scss";
import octopusPicture from "./Octopus.module.png";


function Octopus() {
    return (
        <section className={styles.octopus}>
            <div className={styles.container} >
                <div>
                <img src={octopusPicture} className = {styles.octopusPicture}></img>
                </div>
                <div >
                    <h1></h1>
                </div>
            </div>
        </section>
    )
}

export default Octopus;