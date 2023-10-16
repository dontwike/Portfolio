import React from 'react'
import './Skill.scss'

const Skill = () => {
    return (
        <div className='myskills'>
            <label className='whatIDO'>My Skills</label><br/>

                <div className='skill'>
                    <div className='skill-name'>HTML & CSS</div>
                    <div className='skill-bar'>
                        <div className='skill-per' style={{width:"80%"}}></div>
                    </div>
                </div>

                <div className='skill'>
                    <div className='skill-name'>JavaScript</div>
                    <div className='skill-bar'>
                        <div className='skill-per' style={{width:"70%"}}></div>
                    </div>
                </div>

                <div className='skill'>
                    <div className='skill-name'>Java</div>
                    <div className='skill-bar'>
                        <div className='skill-per' style={{width:"90%"}}></div>
                    </div>
                </div>

                <div className='skill'>
                    <div className='skill-name'>SpringBoot</div>
                    <div className='skill-bar'>
                        <div className='skill-per' style={{width:"50%"}}></div>
                    </div>
                </div>

                <div className='skill'>
                    <div className='skill-name'>React JS</div>
                    <div className='skill-bar'>
                        <div className='skill-per' style={{width:"70%"}}></div>
                    </div>
                </div>

                <div className='skill'>
                    <div className='skill-name'>SQL</div>
                    <div className='skill-bar'>
                        <div className='skill-per' style={{width:"75%"}}></div>
                    </div>
                </div>
        </div>
    )
}

export default Skill