import React from 'react'
import './Education.scss'
import logo from '../../Images/Logo.png'

const Education = () => {
  return (
    <div className='edu-main'>
      <label className='edu'>Education.</label>
      <br />
      <div className='edu-container'>
        <div className='details'>
          <div className='des'>
            <div className='place'>DIT University</div>
            <div className='icon'>
              <img src={logo} alt="not available" />
            </div>
          </div>
          <div className='course'>Bachelor of Science in Computer Science</div>
          <div className='date'>August 2020 - Present</div>
          <div className='About'>DIT University, A grade Accredited by NAAC, offers many courses specializing in Engineering, Law, Management, and many more for both UG, PG and Phd programs.</div>
          <div className='point'>
            <ul>
              <li>Specialization in Cloud Computing and Blockchain.</li>
              <li>Maintained a strong academic record with a CGPA of 8.2.</li>
              <li>Engaged in the Computer Science Club, actively participating in coding community activities.</li>
              <li>Managed and completed numerous projects, highlighting the ability to handle complex tasks, meet deadlines, and deliver high-quality results.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education