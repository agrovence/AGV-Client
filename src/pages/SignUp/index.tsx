import React, { useCallback, useRef } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'

// import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi'

// import { FormHandles } from '@unform/core'
// import { Form } from '@unform/web'

// import { useToast } from '../../hooks/toast'

// import apiClient from '../../services/apiClient'

// import { Link, useHistory } from 'react-router-dom'

// import getValidationErrors from '../../utils/getValidationErrors'

// import * as Yup from 'yup'

// import { Container, Background, AnimationContainer, Content } from './styles'
// import logoImg from '../../assets/agrovencesemfundo.png'

// import Input from '../../components/Input'
// import Button from '../../components/Button'

interface SignUpFormData {
  name: string
  email: string
  password: string
}

const SignUp: React.FC = () => {
  // const formRef = useRef<FormHandles>(null)
  // const { addToast } = useToast()
  // const history = useHistory()

  // const handleSubmit = useCallback(
  //   async (data: SignUpFormData) => {
  //     try {
  //       formRef.current?.setErrors({})

  //       const schema = Yup.object().shape({
  //         name: Yup.string().required('Nome obrigatório'),
  //         email: Yup.string()
  //           .required('E-mail obrigatório')
  //           .email('Digite um email válido'),
  //         password: Yup.string().min(6, 'No mínimo 6 dígitos'),
  //       })

  //       await schema.validate(data, {
  //         abortEarly: false,
  //       })

  //       await apiClient.post('/users', data)

  //       history.push('/')

  //       addToast({
  //         type: 'success',
  //         title: 'Cadastro realizado!',
  //         description: 'Você já pode fazer o login na aplicação',
  //       })
  //     } catch (error) {
  //       if (error instanceof Yup.ValidationError) {
  //         const errors = getValidationErrors(error)
  //         formRef.current?.setErrors(errors)

  //         return
  //       }

  //       addToast({
  //         type: 'error',
  //         title: 'Erro no cadastro',
  //         description:
  //           'Ocorreu um erro ao fazer o seu cadastro, tente novamente',
  //       })
  //     }
  //   },
  //   [addToast, history],
  // )

  return (
    <div id="layoutDefault">
      <div id="layoutDefault_content">
        <main className="bg-dark">
          <Header isAuth={false} />
          <div className="container">
            <div className="row justify-content-center">
              <div
                className="col-xl-10 col-lg-12 col-md-9"
                style={{ marginTop: '120px' }}
              >
                <div className="card o-hidden border-0 shadow-lg my-5">
                  <div className="card-body p-0">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="p-5">
                          <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">
                              Crie uma Conta!
                            </h1>
                          </div>
                          <form className="user">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control form-control-user"
                                id="exampleFirstName"
                                placeholder="Nome"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control form-control-user"
                                id="exampleInputEmail"
                                placeholder="E-mail"
                              />
                            </div>
                            <div className="form-group row">
                              <div className="col-sm-6 mb-3 mb-sm-0">
                                <input
                                  type="password"
                                  className="form-control form-control-user"
                                  id="exampleInputPassword"
                                  placeholder="Senha"
                                />
                              </div>
                              <div className="col-sm-6">
                                <input
                                  type="password"
                                  className="form-control form-control-user"
                                  id="exampleRepeatPassword"
                                  placeholder="Confirmar Senha"
                                />
                              </div>
                            </div>
                            <a
                              href="login.html"
                              className="btn btn-orange-app btn-user btn-block"
                            >
                              Criar conta
                            </a>
                          </form>
                          <hr />
                          <div className="text-center">
                            <Link to="/signin" className="small text-orange">
                              Já possui uma conta? Faça o login!
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-6 d-none d-lg-block"
                        style={{
                          background:
                            "url('assets/img/sign-up-background.png')",
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                        }}
                      ></div>
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

export default SignUp
