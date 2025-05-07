import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>Burak Bulut</a>
        <ul className="permalinks">
            <li><a href="#home">Anasayfa</a></li>
            <li><a href="#about">Hakkımda</a></li>
            <li><a href="#experience">Deneyim</a></li>
            <li><a href="#myprojects">Projelerim</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/burak-bulut-371797364/"><BsLinkedin/></a>
          <a href="https://github.com/Burakbulut34"><BsGithub/></a>
          <a href="https://www.instagram.com/bura.kbulut34/"><BsInstagram/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Burak Bulut. Tüm hakları saklıdır.</small>
        </div>
    </footer>
  )
}

export default Footer