import React, { useState, useCallback, useRef } from 'react';
import LoadingMask from 'react-loadingmask';
import * as Yup from 'yup';

import logo from 'assets/logo.png';

import InputBasic from 'components/InputBasic';
import Button from 'components/Button';
import { useHistory } from 'react-router-dom';
import api from 'services/api';
import getValidationErrors from 'utils/getValidationsErrors';
import {
    Container,
    ContentContainer,
    Logo,
    Form,
    Copyright,
    CreateAccount,
} from './styles';

const Register = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const handleSubmit = useCallback(async data => {
        setLoading(true);
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required(),
                surname: Yup.string().required(),
                email: Yup.string().email().required(),
                password: Yup.string().required().min(6),
                password_confirmation: Yup.string().oneOf(
                    [Yup.ref('password'), null],
                    'Passwords must match',
                ),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            await api.post('/auth/register', data);
            setLoading(false);
            history.push('/login');
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                const errors = getValidationErrors(error);
                formRef.current.setErrors(errors);
            }
            setLoading(false);
        }
    }, []);

    return (
        <Container>
            <ContentContainer>
                <Logo src={logo} alt="logo" />
                <Form onSubmit={handleSubmit} ref={formRef}>
                    <InputBasic name="name" placeholder="Nome" />
                    <InputBasic name="surname" placeholder="Sobrenome" />
                    <InputBasic name="email" placeholder="E-mail" />
                    <InputBasic name="password" placeholder="Senha" />
                    <InputBasic
                        name="password_confirmation"
                        placeholder="Confirmação de senha"
                    />
                    <LoadingMask loading={loading} className="loading">
                        <Button type="submit">Enviar</Button>
                    </LoadingMask>
                </Form>
                <CreateAccount to="/login">Fazer login</CreateAccount>
                <Copyright>Crafted by Vinicios Engelage</Copyright>
            </ContentContainer>
        </Container>
    );
};

export default Register;
