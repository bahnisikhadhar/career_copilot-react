import React from "react";

import styles from "./styles/ResumeInputControl.module.css";

function ResumeInputControl({ label, ...props }) {
  return (
    <div className={styles.container}>
       {label && <label className={styles.ResumeLable}>{label}</label>}
      <input type="text" className={styles.ResumeInput} {...props} />
    </div>
  );
}

export default ResumeInputControl;