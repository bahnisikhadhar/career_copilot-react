import React from 'react'
import styles from "../Components/styles/ShimmerSmall.module.css";
export default function Shimmer() {
  return (
    <div className={styles.shimmerContainer}>
            {Array(24).fill("  ").map((el) => {
                return (

                    <div className={styles.cardShimmer}>
                        <div className={styles.cardShimmerUp}></div>
                    </div>

                )

            })}
        </div>
  )
}
