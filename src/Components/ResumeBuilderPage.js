import React from 'react';
import ResumeHeader from '../Components/ResumeHeader';
import ResumeBody from '../Components/ResumeBody'
// import styles from './styles/ResumeBuilderPage.css'
import styles from "../Components/styles/ResumeBuilderPage.module.css"
export default function ResumeBuilderPage(){
    return(
        <div className={styles.App}>
        <ResumeHeader/>
        <ResumeBody/>
        </div>
    )
}