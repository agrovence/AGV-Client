import React, { useRef, useCallback, useState } from 'react'
// import { FiLogIn, FiMail } from 'react-icons/fi'
// import { FormHandles } from '@unform/core'
// import { Form } from '@unform/web'
// import * as Yup from 'yup'
import { Link } from 'react-router-dom'

// import { useToast } from '../../hooks/toast'
// import getValidationErrors from '../../utils/getValidationErrors'

// import logoImg from '../../assets/agrovencesemfundo.png'

// import Input from '../../components/Input'
// import Button from '../../components/Button'

import api from '../../services/apiClient'

interface ForgotPasswordFormData {
  email: string
}

const ForgotPassword: React.FC = () => {
  // const [loading, setLoading] = useState(false)
  // const formRef = useRef<FormHandles>(null)

  // const { addToast } = useToast()

  // const handleSubmit = useCallback(
  //   async (data: ForgotPasswordFormData) => {
  //     try {
  //       setLoading(true)

  //       formRef.current?.setErrors({})

  //       const schema = Yup.object().shape({
  //         email: Yup.string()
  //           .required('E-mail obrigatório')
  //           .email('Digite um e-mail válido'),
  //       })

  //       await schema.validate(data, {
  //         abortEarly: false,
  //       })

  //       // recuperacao de senha
  //       await api.post('/password/forgot', {
  //         email: data.email,
  //       })

  //       addToast({
  //         type: 'success',
  //         title: 'E-mail de recuperação enviado',
  //         description:
  //           'Enviamos um e-mail para confirmar a recuperação de senha, cheque sua caixa de entrada.',
  //       })
  //     } catch (err) {
  //       if (err instanceof Yup.ValidationError) {
  //         const errors = getValidationErrors(err)
  //         formRef.current?.setErrors(errors)
  //         return
  //       }

  //       addToast({
  //         type: 'error',
  //         title: 'Erro na recuperação de senha',
  //         description:
  //           'Ocorreu um erro ao tentar realizar a recuperação de senha, tente novamente.',
  //       })
  //     } finally {
  //       setLoading(false)
  //     }
  //   },
  //   [addToast],
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
                          background: "url('assets/img/tratorgps.jpg')",
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                        }}
                      ></div>
                      <div className="col-lg-6">
                        <div className="p-5">
                          <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-2">
                              Esqueceu sua senha?
                            </h1>
                            <p className="mb-4">
                              A gente sabe, essas coisas acontecem. Apenas
                              coloque seu endereço de email abaixo e vamos
                              providenciar um link para resetar sua senha!
                            </p>
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
                            <a
                              href="login.html"
                              className="btn btn-orange-app btn-user btn-block"
                            >
                              Enviar pedido no E-mail
                            </a>
                          </form>
                          <hr />
                          <div className="text-center">
                            <Link to="/signup" className="small text-orange">
                              Crie uma conta!
                            </Link>
                          </div>
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

export default ForgotPassword
