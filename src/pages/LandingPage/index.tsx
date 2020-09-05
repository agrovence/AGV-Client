import React, { useState, useCallback, useEffect, useMemo } from 'react'

import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import {
  Container,
  Header,
  HeaderContent,
  Navigators,
  Content,
  AuthContent,
  MainSection,
  Representantes,
  RecentProducts,
} from './styles'

import logoImg from '../../assets/agrovencedeitado.svg'
import localOne from '../../assets/agrovence-local1.png'

import {
  agvLogo,
  headsightLogo,
  precisionLogo,
  shredLogo,
  trimbleLogo,
} from '../../assets/representantes'

import Button from '../../components/Button'
import Product from '../../components/Product'
import Footer from '../../components/Footer'
// import api from '../../services/apiClient'

const LandingPage: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Agrovence" />

          <Navigators>
            <div>
              <span>
                <a>Produtos</a>
              </span>
              <span>
                <a>Contato</a>
              </span>
              <span>
                <a>Sobre</a>
              </span>
            </div>
          </Navigators>

          <AuthContent>
            <Link to="/signin">
              <FiLogIn />
              Entrar
            </Link>
            <Link to="/signup">
              <Button type="button">Cadastrar Agora</Button>
            </Link>
          </AuthContent>
        </HeaderContent>
      </Header>

      <Content>
        <MainSection>
          <div>
            <h1>Transformando o modo como o mundo trabalha!</h1>

            <p>
              Na Agrovence nós vendemos a evolução, transformamos o modo como o
              mundo trabalha
            </p>

            <Link to="/products">
              <Button type="button">Confira toda a nossa tecnologia</Button>
            </Link>
          </div>

          <img src={localOne} alt="Agrovence Local" />
        </MainSection>

        <Representantes>
          <img src={agvLogo} alt="Representantes" />

          <img src={headsightLogo} alt="Representantes" />

          <img src={precisionLogo} alt="Representantes" />

          <img src={shredLogo} alt="Representantes" />

          <img src={trimbleLogo} alt="Representantes" />
        </Representantes>

        <RecentProducts>
          <h1>Produtos mais recentes</h1>

          <section>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </section>
        </RecentProducts>
      </Content>

      <Footer />
    </Container>
  )
}

export default LandingPage
