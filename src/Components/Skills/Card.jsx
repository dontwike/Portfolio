import React from 'react'
import './card.scss'

const Card = () => {
    return (
        <div className='card'>
            <div className='icon'>
                icon
            </div>
            <div className='content'>
                <label>Heading</label>
                <p>context</p>
            </div>
        </div>
    )
}

export default Card