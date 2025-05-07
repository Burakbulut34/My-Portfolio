import React from 'react'
import './contacts.css'
import {MdOutlineEmail} from 'react-icons/md'

const   Contacts = () => {

  return (
    <section id='contacts'>

      <h5>İletişime geçin</h5>
      <h2>Bana Ulaşın</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>E-posta</h4>
            <h5>burakbltu2007@gmail.com</h5>
            <a href="mailto:burakbltu2007@gmail.com">Mesaj gönder</a>
          </article>
        </div>

        <form method='post' action='https://formcarry.com/s/kMP6N_jgDHg'>

         <input type="text" style={{color:"white"}} name="name" placeholder="Ad - Soyad" required />  {/* client side validation */}
         <input type="email" name='email' placeholder='E-posta' required /> 
         <textarea name="message" rows="7" placeholder='Mesaj' required></textarea>
         <button type="submit" className='btn btn-primary'>Gönder</button>
        </form>
      </div>    
    </section>
  )
}

export default Contacts