import React from 'react'

import logoImg from '../../assets/agrovenceland.svg'

import facebookLogo from '../../assets/social-medias/facebook.svg'
import whatsappLogo from '../../assets/social-medias/whatsapp.svg'
import instagramLogo from '../../assets/social-medias/instagram.svg'
import youtubeLogo from '../../assets/social-medias/youtube.svg'

import { Container, FooterS, FooterContent, FooterMedias } from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <FooterS>
        <FooterContent>
          <img src={logoImg} alt="Agrovence" />

          <h1>Fale conosco</h1>
        </FooterContent>
        <FooterMedias>
          <a href="https://facebook.com">
            <img src={facebookLogo} alt="Facebook Agrovence" />
          </a>
          <a href="https://whatsapp.com">
            <img src={whatsappLogo} alt="WhatsApp Agrovence" />
          </a>
          <a href="https://instagram.com">
            <img src={instagramLogo} alt="Instagram Agrovence" />
          </a>
          <a href="https://youtube.com">
            <img src={youtubeLogo} alt="YouTube Agrovence" />
          </a>
        </FooterMedias>
      </FooterS>
    </Container>
  )
}

export default Footer
