import React from 'react'
import styles from "../Components/styles/Shimmer2.module.css";
export default function Shimmer() {
    return (
        <div className={styles.shimmerContainer}>
            {Array(12).fill("  ").map((el) => {
                return (

                    <div className={styles.cardShimmer}>
                        <div className={styles.cardShimmerUp}></div>
                        <div className={styles.cardshimmermiddle}></div>
                        <div className={styles.shimmerbtn}></div>
                    </div>

                )

            })}
        </div>
    )
}
