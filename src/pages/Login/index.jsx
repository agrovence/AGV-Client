import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Lottie from 'react-lottie';
import LoadingMask from 'react-loadingmask';

import farm from 'assets/farm.json';
import logo from 'assets/logo.png';

import InputBasic from 'components/InputBasic';
import Button from 'components/Button';
import { useAuth } from 'hooks/auth';
import {
    Container,
    ContentContainer,
    Logo,
    Form,
    Copyright,
    CreateAccount,
} from './styles';

const Login = () => {
    const [loading, setLoading] = useState(false);

    const history = useHistory();
    const { signIn } = useAuth();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: farm,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const handleSubmit = useCallback(async data => {
        setLoading(true);
        try {
            await signIn(data);
            setLoading(false);
            history.push('/');
        } catch (error) {
            setLoading(false);
        }
    }, []);

    return (
        <Container>
            <ContentContainer>
                <Logo src={logo} alt="logo" />
                <Form onSubmit={handleSubmit}>
                    <InputBasic name="email" placeholder="Email" />
                    <InputBasic name="password" placeholder="Senha" />
                    <LoadingMask loading={loading} className="loading">
                        <Button type="submit">Fazer Login</Button>
                    </LoadingMask>
                </Form>
                <CreateAccount to="create-account">
                    Criar uma conta
                </CreateAccount>
                <Copyright>Crafted by Vinicios Engelage</Copyright>
            </ContentContainer>
            <Lottie options={defaultOptions} height="300px" />
        </Container>
    );
};

export default Login;
