import React, { useCallback, useRef, ChangeEvent } from 'react'
// import { FiMail, FiUser, FiLock, FiCamera, FiArrowLeft } from 'react-icons/fi'
// import { FormHandles } from '@unform/core'
// import { Form } from '@unform/web'
// import * as Yup from 'yup'
// import { useHistory, Link } from 'react-router-dom'

// import api from '../../services/apiClient'
import Header from '../../components/Header'

// import { useToast } from '../../hooks/toast'

// import getValidationErrors from '../../utils/getValidationErrors'

// import Input from '../../components/Input'
// import Button from '../../components/Button'

// import { useAuth } from '../../hooks/auth'

interface ProfileFormData {
  name: string
  email: string
  old_password: string
  password: string
  password_confirmation: string
}

const Profile: React.FC = () => {
  // const formRef = useRef<FormHandles>(null)
  // const { addToast } = useToast()
  // const history = useHistory()

  // const { user, updateUser } = useAuth()

  // const handleSubmit = useCallback(
  //   async (data: ProfileFormData) => {
  //     try {
  //       formRef.current?.setErrors({})

  //       const schema = Yup.object().shape({
  //         name: Yup.string().required('Nome obrigatório'),
  //         email: Yup.string()
  //           .required('E-mail obrigatório')
  //           .email('Digite um e-mail válido'),
  //         old_password: Yup.string(),
  //         password: Yup.string().when('old_password', {
  //           is: val => !!val.length,
  //           then: Yup.string().required('Campo obrigatório'),
  //           otherwise: Yup.string(),
  //         }),
  //         password_confirmation: Yup.string()
  //           .when('old_password', {
  //             is: val => !!val.length,
  //             then: Yup.string().required('Campo obrigatório'),
  //             otherwise: Yup.string(),
  //           })
  //           .oneOf([Yup.ref('password'), null], 'Confirmação incorreta'),
  //       })

  //       await schema.validate(data, {
  //         abortEarly: false,
  //       })

  //       const {
  //         name,
  //         email,
  //         old_password,
  //         password,
  //         password_confirmation,
  //       } = data

  //       const formData = {
  //         name,
  //         email,
  //         ...(old_password
  //           ? {
  //               old_password,
  //               password,
  //               password_confirmation,
  //             }
  //           : {}),
  //       }

  //       const response = await api.put('/profile', formData)

  //       updateUser(response.data)

  //       history.push('/dashboard')

  //       addToast({
  //         type: 'success',
  //         title: 'Perfil atualizado!',
  //         description:
  //           'Suas informações do perfil foram atualizadas com sucesso!',
  //       })
  //     } catch (err) {
  //       if (err instanceof Yup.ValidationError) {
  //         const errors = getValidationErrors(err)
  //         formRef.current?.setErrors(errors)
  //         return
  //       }

  //       addToast({
  //         type: 'error',
  //         title: 'Erro na atualização',
  //         description:
  //           'Ocorreu um erro ao atualizar o perfil, tente novamente.',
  //       })
  //     }
  //   },
  //   [updateUser, addToast, history],
  // )

  // const handleAvatarChange = useCallback(
  //   (e: ChangeEvent<HTMLInputElement>) => {
  //     if (e.target.files) {
  //       const data = new FormData()

  //       data.append('avatar', e.target.files[0])

  //       api.patch('/users/avatar', data).then(response => {
  //         updateUser(response.data)

  //         addToast({
  //           type: 'success',
  //           title: 'Avatar atualizado!',
  //         })
  //       })
  //     }
  //   },
  //   [addToast, updateUser],
  // )
  return (
    <div id="layoutDefault" className="bg-dark">
      <div id="layoutDefault_content">
        <main>
          <Header isAuth={true} />
          <div className="container" style={{ marginTop: '120px' }}>
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="p-5">
                      <form className="user">
                        <div className="text-center">
                          <img
                            src="https://avatars0.githubusercontent.com/u/52840235?s=460&u=f390ab598011bdfe2bc4f4712b7781234c2b1dac&v=4"
                            alt="João Lenon"
                            className="img-fluid rounded-circle mx-auto d-block"
                          />
                          <label htmlFor="avatar">
                            <i
                              className="fas fa-camera"
                              style={{
                                cursor: 'pointer',
                                width: '32px',
                                height: '32px',
                              }}
                            ></i>
                            <input
                              type="file"
                              id="avatar"
                              style={{ display: 'none' }}
                            />
                          </label>
                          <h1>Meu perfil</h1>
                        </div>

                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-user"
                            placeholder="Nome"
                          />
                        </div>
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
                            placeholder="Antiga Senha"
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
                            placeholder="Confirmar Nova Senha"
                          />
                        </div>
                        <a
                          href="index.html"
                          className="btn btn-orange-app btn-user btn-block"
                        >
                          Confirmar Mudanças
                        </a>
                      </form>
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

export default Profile
