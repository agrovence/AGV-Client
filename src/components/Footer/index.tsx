import React from 'react'

const Footer: React.FC = () => {
  return (
    <div id="layoutDefault_footer">
      <footer className="footer pt-10 pb-5 mt-auto bg-light footer-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-brand">Agrovence</div>
              <div className="mb-3">Nos siga nas redes sociais</div>
              <div className="icon-list-social mb-5">
                <a className="icon-list-social-link" href="/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="icon-list-social-link" href="/">
                  <i className="fab fa-facebook"></i>
                </a>
                <a className="icon-list-social-link" href="/">
                  <i className="fab fa-github"></i>
                </a>
                <a className="icon-list-social-link" href="/">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                  <div className="text-uppercase-expanded text-xs mb-4">
                    Product
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <a href="/">Landing</a>
                    </li>
                    <li className="mb-2">
                      <a href="/">Pages</a>
                    </li>
                    <li className="mb-2">
                      <a href="/">Sections</a>
                    </li>
                    <li className="mb-2">
                      <a href="/">Documentation</a>
                    </li>
                    <li>
                      <a href="/">Changelog</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                  <div className="text-uppercase-expanded text-xs mb-4">
                    Technical
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <a href="/">Documentation</a>
                    </li>
                    <li className="mb-2">
                      <a href="/">Changelog</a>
                    </li>
                    <li className="mb-2">
                      <a href="/">Theme Customizer</a>
                    </li>
                    <li>
                      <a href="/">UI Kit</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                  <div className="text-uppercase-expanded text-xs mb-4">
                    Includes
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <a href="/">Utilities</a>
                    </li>
                    <li className="mb-2">
                      <a href="/">Components</a>
                    </li>
                    <li className="mb-2">
                      <a href="/">Layouts</a>
                    </li>
                    <li className="mb-2">
                      <a href="/">Code Samples</a>
                    </li>
                    <li className="mb-2">
                      <a href="/">Products</a>
                    </li>
                    <li className="mb-2">
                      <a href="/">Affiliates</a>
                    </li>
                    <li>
                      <a href="/">Updates</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="text-uppercase-expanded text-xs mb-4">
                    Legal
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <a href="/">Privacy Policy</a>
                    </li>
                    <li className="mb-2">
                      <a href="/">Terms and Conditions</a>
                    </li>
                    <li>
                      <a href="/">License</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-5" />
          <div className="row align-items-center">
            <div className="col-md-6 small">
              Copyright &copy; Agrovence 2020
            </div>
            <div className="col-md-6 text-md-right small">
              <a href="/">Politicas de Privacidade</a>
              &middot;
              <a href="/">Termos &amp; Condições</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
