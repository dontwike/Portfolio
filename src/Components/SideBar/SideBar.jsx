import React from 'react'
import './SideBar.scss'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const rightSideBar = () => {
  return (
    <div className='container'>
      <div className='name'>Pranjal.</div>

      <a href='/'>Home</a>
      <a href='/skill'>Skills</a>
      <a href='/experience'>Work Experience</a>
      <a target='_blank' rel="noreferrer" href='https://hashnode.com/@dontwike'>Blogs</a>
      <a href='/contact'>Contact</a>

      <div className='links'>
        <a href='https://github.com/dontwike'><FaGithub/></a>
        <a href='https://www.linkedin.com/in/dontwike/'><FaLinkedin/></a>
        <a href='https://twitter.com/_pranjal_goyal_'><FaXTwitter/></a>
      </div>
    </div>
  )
}

export default rightSideBar