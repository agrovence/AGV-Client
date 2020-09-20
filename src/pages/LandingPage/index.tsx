import React from 'react'

// import { FiLogIn } from 'react-icons/fi'
// import { Link } from 'react-router-dom'

// import logoImg from '../../assets/agrovencedeitado.svg'
// import localOne from '../../assets/agrovence-local1.png'

// import {
//   agvLogo,
//   headsightLogo,
//   precisionLogo,
//   shredLogo,
//   trimbleLogo,
// } from '../../assets/representantes'

// import Button from '../../components/Button'
import Product from '../../components/Product'
import Category from '../../components/Category'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Representantes from '../../components/Representantes'
// import api from '../../services/apiClient'

const LandingPage: React.FC = () => {
  return (
    <div id="layoutDefault">
      <div id="layoutDefault_content">
        <main>
          <Header isAuth={false} />
          <header
            className="page-header page-header-dark bg-img-repeat bg-white"
            style={{
              background:
                "url('assets/img/agrovence-local2.jpeg') center no-repeat",
              backgroundSize: '100%',
              WebkitBackgroundSize: '100%',
            }}
          >
            <div style={{ marginTop: '60px' }} className="page-header-content">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-8 col-lg-10 text-center p-5 mb-2 bg-dark rounded">
                    <h1
                      style={{ fontSize: '2.0rem' }}
                      className="page-header-title"
                    >
                      Transformando o modo como o mundo trabalha!
                    </h1>
                    <p className="page-header-text mb-5">
                      Na Agrovence nós vendemos a evolução, transformamos o modo
                      como o mundo trabalha!
                    </p>
                    <a
                      className="btn btn-marketing rounded-pill btn-red"
                      href="#products-categories"
                    >
                      Produtos mais recentes
                    </a>
                    <a
                      className="btn btn-link btn-marketing rounded-pill"
                      href="#products-categories"
                    >
                      Navegue pelas categorias
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="svg-border-waves text-light">
              <svg
                className="wave"
                fill="currentColor"
                preserveAspectRatio="none"
                viewBox="0 0 1920 75"
              >
                <title>wave</title>
                <g className="b">
                  <path
                    className="c"
                    d="M1963,327H-105V65A2647.49,2647.49,0,0,1,431,19c217.7,3.5,239.6,30.8,470,36,297.3,6.7,367.5-36.2,642-28a2511.41,2511.41,0,0,1,420,48"
                  ></path>
                </g>
                <g className="b">
                  <path
                    className="d"
                    d="M-127,404H1963V44c-140.1-28-343.3-46.7-566,22-75.5,23.3-118.5,45.9-162,64-48.6,20.2-404.7,128-784,0C355.2,97.7,341.6,78.3,235,50,86.6,10.6-41.8,6.9-127,10"
                  ></path>
                </g>
                <g className="b">
                  <path
                    className="d"
                    d="M1979,462-155,446V106C251.8,20.2,576.6,15.9,805,30c167.4,10.3,322.3,32.9,680,56,207,13.4,378,20.3,494,24"
                  ></path>
                </g>
                <g className="b">
                  <path
                    className="d"
                    d="M1998,484H-243V100c445.8,26.8,794.2-4.1,1035-39,141-20.4,231.1-40.1,378-45,349.6-11.6,636.7,73.8,828,150"
                  ></path>
                </g>
              </svg>
            </div>
          </header>
          <section className="py-15 bg-white">
            <div className="container">
              <h2 className="mb-4 text-dark">
                Nossas principais representantes
              </h2>
              <div className="row">
                <Representantes />
              </div>
            </div>
          </section>
          <section id="products-categories" className="bg-light py-10">
            <div className="container">
              <h2 className="mb-4">Posts mais Recentes</h2>
              <div className="row">
                <Product />
              </div>
              <h2 className="mb-4">Categorias</h2>
              <div className="row">
                <Category />
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

export default LandingPage
