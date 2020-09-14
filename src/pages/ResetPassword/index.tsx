import React, { useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
// import { FiLock } from 'react-icons/fi'
// import { FormHandles } from '@unform/core'
// import { Form } from '@unform/web'
// import * as Yup from 'yup'
// import { useHistory, useLocation } from 'react-router-dom'

// import { useToast } from '../../hooks/toast'
// import getValidationErrors from '../../utils/getValidationErrors'

// import logoImg from '../../assets/agrovencesemfundo.png'

// import Input from '../../components/Input'
// import Button from '../../components/Button'

// import { Container, Content, AnimationContainer, Background } from './styles'
// import api from '../../services/apiClient'

interface ResetPasswordFormData {
  password: string
  password_confirmation: string
}

const ResetPassword: React.FC = () => {
  // const formRef = useRef<FormHandles>(null)
  // const history = useHistory()
  // const location = useLocation()

  // const { addToast } = useToast()

  // const handleSubmit = useCallback(
  //   async (data: ResetPasswordFormData) => {
  //     try {
  //       formRef.current?.setErrors({})

  //       const schema = Yup.object().shape({
  //         password: Yup.string().required('Senha obrigatória'),
  //         password_confirmation: Yup.string().oneOf(
  //           [Yup.ref('password'), null],
  //           'Confirmação incorreta',
  //         ),
  //       })

  //       await schema.validate(data, {
  //         abortEarly: false,
  //       })

  //       const { password, password_confirmation } = data
  //       const token = location.search.replace('?token=', '')

  //       if (!token) {
  //         throw new Error()
  //       }

  //       await api.post('/password/reset', {
  //         password,
  //         password_confirmation,
  //         token,
  //       })

  //       history.push('/')
  //     } catch (err) {
  //       if (err instanceof Yup.ValidationError) {
  //         const errors = getValidationErrors(err)
  //         formRef.current?.setErrors(errors)
  //         return
  //       }

  //       addToast({
  //         type: 'error',
  //         title: 'Erro ao resetar senha',
  //         description: 'Ocorreu um erro ao resetar sua senha, tente novamente.',
  //       })
  //     }
  //   },
  //   [addToast, history, location.search],
  // )

  return (
    <div id="layoutDefault" className="bg-dark">
      <div id="layoutDefault_content">
        <main>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-12 col-md-9">
                <div className="card o-hidden border-0 shadow-lg my-5">
                  <div className="card-body p-0">
                    <div className="row">
                      <div
                        className="col-lg-6 d-none d-lg-block"
                        style={{
                          background: "url('assets/img/reset-pass.png')",
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                        }}
                      ></div>
                      <div className="col-lg-6">
                        <div className="p-5">
                          <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-2">
                              Resetar senha!
                            </h1>
                            <p className="mb-4">
                              Digite a senha antiga, e a nova senha para trocar
                              sua senha!
                            </p>
                          </div>
                          <form className="user">
                            <div className="form-group">
                              <input
                                type="password"
                                className="form-control form-control-user"
                                id="exampleInputPassword"
                                placeholder="Senha Antiga"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="password"
                                className="form-control form-control-user"
                                id="exampleInputPassword"
                                placeholder="Nova Senha"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="password"
                                className="form-control form-control-user"
                                id="exampleInputPassword"
                                placeholder="Confirmar nova senha"
                              />
                            </div>
                            <a
                              href="login.html"
                              className="btn btn-orange-app btn-user btn-block"
                            >
                              Resetar Senha
                            </a>
                          </form>
                          <hr />
                          <div className="text-center">
                            <Link to="/signin" className="small text-orange">
                              Voltar para o login!
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
    </div>
  )
}

export default ResetPassword
