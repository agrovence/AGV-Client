import React, { useCallback, useRef } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'
// import * as Yup from 'yup'

// import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'

// import { useAuth } from '../../hooks/auth'
// import { useToast } from '../../hooks/toast'

// import { Form } from '@unform/web'
// import { FormHandles } from '@unform/core'

// import getValidationErrors from '../../utils/getValidationErrors'

// import logoImg from '../../assets/agrovencesemfundo.png'

// import Input from '../../components/Input'
// import Button from '../../components/Button'

interface SignInFormData {
  email: string
  password: string
}

const SignIn: React.FC = () => {
  // const formRef = useRef<FormHandles>(null)

  // const { signIn } = useAuth()
  // const { addToast } = useToast()

  // const handleSubmit = useCallback(
  //   async (data: SignInFormData) => {
  //     try {
  //       formRef.current?.setErrors({})

  //       const schema = Yup.object().shape({
  //         email: Yup.string()
  //           .required('E-mail obrigatório')
  //           .email('Digite um email válido'),
  //         password: Yup.string().required('Senha obrigatória'),
  //       })

  //       await schema.validate(data, {
  //         abortEarly: false,
  //       })

  //       await signIn({ email: data.email, password: data.password })
  //     } catch (error) {
  //       if (error instanceof Yup.ValidationError) {
  //         const errors = getValidationErrors(error)
  //         formRef.current?.setErrors(errors)

  //         return
  //       }

  //       addToast({
  //         type: 'error',
  //         title: 'Erro na autenticação',
  //         description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
  //       })
  //     }
  //   },
  //   [signIn, addToast],
  // )

  return (
    <div id="layoutDefault">
      <div id="layoutDefault_content">
        <main className="bg-dark">
          <Header />
          <div className="container">
            <div className="row justify-content-center">
              <div
                className="col-xl-10 col-lg-12 col-md-9"
                style={{ marginTop: '120px' }}
              >
                <div className="card o-hidden border-0 shadow-lg my-5">
                  <div className="card-body p-0">
                    <div className="row">
                      <div
                        className="col-lg-6 d-none d-lg-block"
                        style={{
                          background:
                            "url('assets/img/sign-in-background.png')",
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                        }}
                      ></div>
                      <div className="col-lg-6">
                        <div className="p-5">
                          <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">
                              Bem vindo de volta!
                            </h1>
                          </div>
                          <form className="user">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control form-control-user"
                                id="exampleInputEmail"
                                aria-describedby="emailHelp"
                                placeholder="E-mail"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="password"
                                className="form-control form-control-user"
                                id="exampleInputPassword"
                                placeholder="Senha"
                              />
                            </div>
                            <div className="form-group">
                              <div className="custom-control custom-checkbox small">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="customCheck"
                                >
                                  Manter logado
                                </label>
                              </div>
                            </div>
                            <a
                              href="index.html"
                              className="btn btn-orange-app btn-user btn-block"
                            >
                              Login
                            </a>
                          </form>
                          <hr />
                          <div className="text-center">
                            <Link
                              to="/forgot-password"
                              className="small text-orange"
                            >
                              Esqueceu sua senha?
                            </Link>
                          </div>
                          <div className="text-center">
                            <Link to="/signup" className="small text-orange">
                              Criar uma conta!
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div id="layoutDefault_footer">
        <Footer />
      </div>
    </div>
  )
}

export default SignIn
