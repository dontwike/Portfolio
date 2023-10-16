import React from 'react'
import './skills.scss'
import { FaCss3Alt, FaDocker, FaGitAlt, FaHtml5, FaJava, FaNodeJs, FaNpm, FaReact, FaSass } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiHibernate, SiMongodb, SiMysql } from 'react-icons/si'
import { BiLogoSpringBoot } from 'react-icons/bi'
import { TbBrandNextjs } from 'react-icons/tb'
import Skill from './Skill'
import Education from './Education'

const Skills = () => {
    return (
        <div className='skillContainer'>
            <div className='skillContainerChild'>
                <div className='all'>
                    <label className='whatIDO'>WHAT I DO</label>
                    <div className='Des'>Full Stack Developer with a focus on Java, JavaScript</div>
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
                        <label className='mongo'><BiLogoSpringBoot /></label>
                        <label className='mongo'><FaNodeJs /></label>
                        <label className='next'><TbBrandNextjs /></label>
                        <label className='hibernate'><SiHibernate/></label>
                    </div>
                </div>
            </div>
            <Skill/>
            <Education/>
        </div>
    )
}

export default Skills