import React from 'react'
import  "./footer.css"
import Image from 'next/image'

type Props = {
    logo:string,
   
}

export default function Footer({logo}: Props) {
  return (
    <footer className="footer__container">
        <div>
            <Image width={100} height={100} src={logo} alt="logo" />
            
        </div>
        <div>
          <p>CONTACTO</p>
          <div className="footer__container_contact">
            <ul className='footer__ul'>
                    <li className='footer__list'>
                    <i className="fi fi-br-envelope"></i>correo@mail.com
                    </li>
                    <li className='footer__list'>
                    <i className="fi fi-rr-phone-call"></i>111-1111
                    </li>
                    <li className='footer__list'>
                    <i className="fi fi-rr-marker"></i>Morón, Buenos Aires
                    </li>
              </ul>
            </div>
          <div>
          </div>
        </div>
    </footer>
  )
}