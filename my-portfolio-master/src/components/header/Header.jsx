import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/user-img.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    
    
      <header id='home'>

        <div className="container header__container">

          <h5>Merhaba, ben</h5>
          <h1>Burak Bulut</h1>
          <h5 className="text-light">Lise Yazılım Mezunu</h5>
          <CTA/>
          <HeaderSocials/>

          <div className="me">

            <img src={me} alt='me'/>
          </div>

          <a href="#contacts" className='scroll__down'>Kaydır</a>
        </div>
      </header>

    
    
  )
}

export default Header