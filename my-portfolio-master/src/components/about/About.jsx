import React from 'react'
import './about.css'
import myImage from '../../assets/user-img.png'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>  Tanışın</h5>
      <h2>Hakkımda</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Derece</h5>
                  <small>HKMTAL Yazılım Geliştirme (YG)<br /><i>HMTAL Lisesi.</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Mevcut not ortalaması</h5>
                  <small>57</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Alanlar</h5>
                  <small>
                    <ul>
                      <li>Ön Uç Geliştirici</li>
                      <li>Arka Uç Geliştirici</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
                    Ben <b>HKMTAL Lisesi`nde</b> Yazılım Geliştirme Lise Mezunu öğrencisiyim. 
                    Ben, teknik becerilerimi geliştirmek ve başvurmak için staj fırsatı arayan hevesli ve azimli bir Yazılım geliştirme öğrencisiyim.
                    Yazılım gelişirmede güçlü bir akademik temele ve çeşitli programlama dillerinde uygulamalı deneyime sahip olarak,
                    yenilikçi projelere katkıda bulunmaya ve sektördeki deneyimli profesyonellerden öğrenmeye istekliyim. Her zaman zorluklarla yüzleşmeye hazır, çabuk öğrenen biriyim.
                    
            </p>

          </div>
      </div>
    </section>
  )
}

export default About