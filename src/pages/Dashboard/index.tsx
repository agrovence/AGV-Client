import React, { useState, useCallback, useEffect, useMemo } from 'react'

// import { FiPower } from 'react-icons/fi'
// import { Link } from 'react-router-dom'

// import logoImg from '../../assets/agrovencesemfundo.png'
// import { useAuth } from '../../hooks/auth'
// import api from '../../services/apiClient'

import Product from '../../components/Product'
import Category from '../../components/Category'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Representantes from '../../components/Representantes'

import agrovenceLocal from '../../assets/agrovence-local2.jpeg'

const Dashboard: React.FC = () => {
  // const { signOut, user } = useAuth()

  return (
    <div id="layoutDefault">
      <div id="layoutDefault_content">
        <main className="bg-dark text-white">
          <Header isAuth={true} />
          <section className="py-10">
            <div className="container">
              <h2 className="mb-4 text-white">Conheça nossa loja</h2>
              <div className="row justify-content-center">
                <h4 className="mb-4 text-white">Filial Toledo</h4>
                <img
                  className="rounded"
                  src={agrovenceLocal}
                  style={{ width: '90%' }}
                />
              </div>
              <div
                style={{ marginTop: '20px' }}
                className="row justify-content-center"
              >
                <h4 className="mb-4 text-white">Localização</h4>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.545626690999!2d-53.76638838448096!3d-24.70814161082254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f395dbf84d6215%3A0x355b18418fa898a9!2sAgrovence%20Implementos%20Agricolas!5e0!3m2!1spt-BR!2sbr!4v1600627801117!5m2!1spt-BR!2sbr"
                  width="1000"
                  height="400"
                  frameBorder="0"
                  style={{ border: 0 }}
                  aria-hidden="false"
                  tabIndex={0}
                  className="rounded"
                ></iframe>
              </div>
            </div>
          </section>
          <section className="py-10 bg-white">
            <div className="container">
              <h2 className="mb-4 text-dark">
                Nossas principais representantes
              </h2>
              <div className="row">
                <Representantes />
              </div>
            </div>
          </section>
        </main>
      </div>
      <div id="layoutDefault_footer">
        <Footer />
      </div>
    </div>
  )
}

export default Dashboard
