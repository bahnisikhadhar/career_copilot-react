import React,{useState} from 'react'
import styles from "./styles/ApplicantDetails.module.css"
const ApplicantDetails = ({formData,setFormData,submittedData,setSubmittedData,showModal,setShowModal,setShowSuccessMessage}) => {
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        setSubmittedData([...submittedData,formData])
        setFormData({name:"",email:"",qualification:"",jobrole:"",reference:""})
        setShowModal(false)
        setShowSuccessMessage(true);
    }
   
  return (
    <div className = {styles.modalBackdrop}>
        <form className = {styles.modal} onSubmit = {handleSubmit}>
        <div className={styles.cross_container}>
        <button onClick = {()=>setShowModal(false)}><i class="fa-solid fa-x"></i></button>
        </div>
        
           <lablel>
               <span>Enter Your FullName:</span><br />
               <input type="text" className = {styles.applicantName} required value = {formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
           </lablel><br /> <br />
           <lablel>
               <span>Enter Your Email:</span><br />
               <input type="email"  className = {styles.applicantEmail} required value = {formData.email} onChange = {(e)=>setFormData({ ...formData, email:e.target.value})}/>
           </lablel><br /> <br />
           <lablel>
               <span>Highest Educational Qualification:</span>
               <input type="text" className = {styles.applicantQualification} required value = {formData.qualification} onChange = {(e)=>setFormData({ ...formData, qualification:e.target.value})}/>
           </lablel><br /> <br />
           <lablel>
               <span>Job Role You Are Looking For:</span>
               <input type="text" className = {styles.applicantjobRole} required value = {formData.jobrole} onChange = {(e)=>setFormData({ ...formData, jobrole:e.target.value})}/>
           </lablel><br /> <br />
           <lablel>
               <span>How You Came To Know About Career Copilot:</span>
               <input type="text" className={styles.applicantReference} required value = {formData.reference} onChange = {(e)=>setFormData({ ...formData, reference:e.target.value})}/>
           </lablel><br /> <br />
           <div className={styles.aplicationBtn}>
           <button type="submit">Submit</button>
           </div>
        </form>
    </div>
  )
}

export default ApplicantDetails



