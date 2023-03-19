import React from 'react'
import Logo from '../../assets/logo.png'
import {BsTelegram} from 'react-icons/bs'
function Navbar() {
  return (
    <div className='header container bg-transparent py-2 '>
        
        <div className="d-flex align-items-center justify-content-center pt-25">
           
        <div className='text-white d-flex align-items-center gap-4 logo-bx'>
            <img src={Logo} alt=""/>
            <p className='logo-text'>shAIba</p>
        </div>
        <div className='text-white'>
            <a href="/" className='chat-btn' >CHAT BOT <span className='tele-btn'><BsTelegram/></span> </a>
        </div>
        </div>
       
       




    </div>
  )
}

export default Navbar