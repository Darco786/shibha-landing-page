import React from 'react'
import Logo from '../../assets/logo.png'
import {FaTelegramPlane,FaFacebookSquare} from 'react-icons/fa'
import {RiRecordCircleLine} from 'react-icons/ri'
function Mobfooter() {
  return (
    <section className='footer pt-10'>
        <div className='container'>
        <div className='text-white d-flex align-items-center gap-4 margin-auto justify-content-center'>
            <img src={Logo} alt=""/>
            <p className='logo-text'>shAIba</p>
        </div>
<div className='foot-social d-flex gap-2 justify-content-center'>
    <a href="/"><FaTelegramPlane/></a>
    <a href="/"><RiRecordCircleLine/></a>
    <a href="/"><FaFacebookSquare/></a>
    <a href="/"><FaTelegramPlane/></a>
    <a href="/"><FaTelegramPlane/></a>
    <a href="/"><FaTelegramPlane/></a>
    <a href="/"><FaTelegramPlane/></a>

</div>
        </div>
    </section>
  )
}

export default Mobfooter