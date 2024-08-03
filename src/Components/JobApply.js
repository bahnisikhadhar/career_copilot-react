
import React, { useState,useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ApplicantDetails from './ApplicantDetails'
import styles from './styles/JobApply.module.css'
// import './JobApply.css'

const JobApply = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  let jobData = location.state.message
  console.log(jobData)
  const isoDate = jobData.created
  const date = new Date(isoDate)
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  const [formData, setFormData] = useState({ name: "", email: "", qualification: "", jobrole: "", reference: "" })
  const [submittedData, setSubmittedData] = useState([])
  useEffect(() => {
    if (showSuccessMessage) {
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2000);
    }
  }, [showSuccessMessage]);
  return (
    <>
      {showModal && <ApplicantDetails formData={formData} setFormData={setFormData} submittedData={submittedData} setSubmittedData={setSubmittedData} showModal={showModal} setShowModal={setShowModal} showSuccessMessage={showSuccessMessage} setShowSuccessMessage={setShowSuccessMessage}/>}
      <div className={styles.jobDetails}>
        <div className={styles.jobInfo}>
          <h1 className={styles.jobTitle}>{jobData.title}</h1>
          <div className={styles.jobMeta}>
            <p className={styles.companyName}>Company Name:{jobData?.company?.display_name}</p>
            <p className={styles.jobPosted}>PublishedAt: {formattedDate}</p>
            <p className={styles.jobLocation}>Location: {jobData?.location?.display_name}</p>
          </div>
          <p className={styles.jobDescription}>{jobData?.description}</p>
        </div>
        <div className={styles.chancesContainer}>
        <div className={styles.jobApply}>
          <h3 className={styles.applyHeading}>Ready to take the next step? Fill out the form and we'll be in touch.</h3>
          <button className={styles.applyBtn} onClick={() => setShowModal(true)}>Add Details</button>
        </div>
        <div>
        <a href={jobData.redirect_url} target="_blank">  <button className={styles.applyBtn}> Click Here To Apply Directly</button></a>
        </div>
        <div className={styles.resumeBuilder}>
          <h2 className={styles.builderHeading}>Want to improve your chances of getting hired??</h2>
          <button className={styles.builderBtn} onClick={() => navigate("/resumebuilder")}>Use our Resume Builder</button>
        </div>
        </div>
        {showSuccessMessage && <div className ={styles.successContainer}><p className ={styles.successMessage}>SuccessFully Collected Your Details..Will Get Back to You Soon!!</p></div>}
      </div>
    </>
  )
}

export default JobApply


