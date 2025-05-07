import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    
    <div className="header__socials">

        <a href="https://www.linkedin.com/in/burak-bulut-371797364/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/Burakbulut34" target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href="https://www.instagram.com/bura.kbulut34/" target="_blank" rel='noreferrer'><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials