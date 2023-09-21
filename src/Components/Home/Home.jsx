import React from 'react'
import './Home.scss'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter, FaHashnode } from 'react-icons/fa6'
import { SiLeetcode } from 'react-icons/si'



const Home = () => {
    return (
        <div className='main'>
            <div className='info'>
                <div className='name'>
                    Pranjal Goyal
                </div>
                <div className='role'>
                    Full Stack Web Developer
                </div>
                <div className='description'>
                    I am a dedicated Full Stack Software Developer 🚀 with a strong background in building web applications. I specialize in JavaScript, React JS, Next JS, and Spring Boot, alongside a range of other cutting-edge technologies and frameworks.
                </div>
                <div className='profile'>
                    <a href='github.com/dontwike' className='github'><FaGithub /></a>
                    <a href='https://www.linkedin.com/in/dontwike/' className='linkedin'><FaLinkedin /></a>
                    <a href='https://leetcode.com/dontwike/' className='leetcode'><SiLeetcode /></a>
                    <a href='https://hashnode.com/@dontwike' className='hashnode'><FaHashnode /></a>
                    <a href='https://twitter.com/_pranjal_goyal_' className='twitter'><FaXTwitter /></a>
                </div>

                <div className='buttons'>
                    <button className='button'>Resume</button>
                    <button className='button'>Contact</button>
                </div>
            </div>
        </div>
    )
}

export default Home