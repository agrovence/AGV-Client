import React from 'react'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/agrovencedeitado.svg'

const Header: React.FC = () => {
  return (
    <nav className="navbar navbar-marketing navbar-expand-lg bg-transparent navbar-dark fixed-top">
      <div className="container">
        <Link to="/" className="nav-item">
          <img src={logoImg} style={{ width: '60%' }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Abrir navegação"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-lg-5">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home text-white"></i>
              </Link>
            </li>
            <li className="nav-item dropdown no-caret">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownDocs"
                href=""
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i
                  style={{ marginTop: 3 }}
                  className="fas fa-mobile text-white"
                ></i>
                <i className="fas fa-chevron-right dropdown-arrow text-white"></i>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right animated--fade-in-up"
                aria-labelledby="navbarDropdownDocs"
              >
                <a
                  className="dropdown-item py-3"
                  href="https://docs.startbootstrap.com/sb-ui-kit-pro/quickstart"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="icon-stack bg-primary-soft text-primary mr-4">
                    <i className="fas fa-book-open"></i>
                  </div>
                  <div>
                    <div className="small text-gray-500">Documentation</div>
                    Usage instructions and reference
                  </div>
                </a>
                <div className="dropdown-divider m-0"></div>
                <a
                  className="dropdown-item py-3"
                  href="https://docs.startbootstrap.com/sb-ui-kit-pro/components"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="icon-stack bg-primary-soft text-primary mr-4">
                    <i className="fas fa-code"></i>
                  </div>
                  <div>
                    <div className="small text-gray-500">Components</div>
                    Code snippets and reference
                  </div>
                </a>
                <div className="dropdown-divider m-0"></div>
                <a
                  className="dropdown-item py-3"
                  href="https://docs.startbootstrap.com/sb-ui-kit-pro/changelog"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="icon-stack bg-primary-soft text-primary mr-4">
                    <i className="fas fa-file"></i>
                  </div>
                  <div>
                    <div className="small text-gray-500">Changelog</div>
                    Updates and changes
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="nav-link">
                <i className="fas fa-sign-in-alt text-white"></i>
              </Link>
            </li>
          </ul>
          <Link to="/signup" className="btn-red btn rounded-pill px-4 ml-lg-4">
            Cadastrar Agora<i className="fas fa-arrow-right ml-1"></i>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
