import './contact.scss'
import React from 'react'
import { BsFillPhoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { HiLocationMarker } from 'react-icons/hi'

const Contact = () => {
    return (
        <div className='main'>

            {/* Contact ME info */}
            <div className='myInfo'>
                <div className='myInfoChild'>
                    <label>CONTACT ME</label>
                    <p><BsFillPhoneFill style={{color:"#D43F52",  fontSize:"27px", marginRight:"10px"}}/> 9808407890</p>
                    <p><MdEmail style={{color:"#D43F52", fontSize:"27px", marginRight:"10px"}}/> 
                    <a  href="mailto:itspranjal00@gmail.com">itspranjal00@gmail.com</a>
                    </p>
                    <p><HiLocationMarker style={{color:"#D43F52", fontSize:"27px", marginRight:"10px"}}/> Ajabpur Khurd, Dehradun</p>
                </div>
            </div>

            {/* Name email message input box */}
            <div className='yourInfo'>
                <div className='yourInfoChild'>
                    <form>
                        <input type='text' placeholder='Your Name'></input> <br />
                        <input type='text' placeholder='Your Email'></input> <br />
                        <textarea placeholder='Your Message' row='5' col='50'></textarea> <br />
                        <button type='reset' value='reset' className='buttons'>Reset</button>
                        <button type='submit' value='submit' className='buttons'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact