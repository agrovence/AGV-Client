import React from 'react'

import { FiEdit3, FiTrash } from 'react-icons/fi'
import logoImg from '../../assets/agrovenceland.svg'

import { Container, FooterS, FooterContent } from './styles'
// import api from '../../services/apiClient'

const Footer: React.FC = () => {
  return (
    <Container>
      <FooterS>
        <FooterContent>
          <img src={logoImg} alt="Agrovence" />

          <h1>Fale conosco</h1>
        </FooterContent>
      </FooterS>
    </Container>
  )
}

export default Footer
