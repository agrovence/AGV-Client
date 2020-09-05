import React, { useState, useCallback, useEffect, useMemo } from 'react'

import { FiPower } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Container, Header, HeaderContent, Profile, Content } from './styles'

import logoImg from '../../assets/agrovencesemfundo.png'
import { useAuth } from '../../hooks/auth'
// import api from '../../services/apiClient'

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth()

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Agrovence" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem vindo,</span>
              <Link to="/profile">
                <strong>{user.name}</strong>
              </Link>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content></Content>
    </Container>
  )
}

export default Dashboard
