import React from 'react'
import './skills.scss'
import { FaCss3Alt, FaDocker, FaGitAlt, FaHtml5, FaJava, FaNpm, FaReact, FaSass } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiMongodb, SiMysql } from 'react-icons/si'
import Card from './Card.jsx'

const Skills = () => {
    return (
        <div className='skillContainer'>
            <div className='skillContainerChild'>
                <div className='all'>
                    <label className='whatIDO'>WHAT I DO</label>
                    <p className='Des'>Full Stack Developer with a focus on Java, JavaScript</p>
                    <div className='logos'>
                        <label className='java'><FaJava /></label>
                        <label className='javascript'><IoLogoJavascript /></label>
                        <label className='html'><FaHtml5 /></label>
                        <label className='css'><FaCss3Alt /></label>
                        <label className='sass'><FaSass /></label>
                        <label className='react'><FaReact /></label>
                        <label className='npm'><FaNpm /></label>
                        <label className='docker'><FaDocker /></label>
                        <label className='git'><FaGitAlt /></label>
                        <label className='sql'><SiMysql /></label>
                        <label className='mongo'><SiMongodb /></label>
                    </div>
                </div>
            </div>
            <Card />
        </div>
    )
}

export default Skills