import React, { useState, useEffect, useCallback } from 'react';
import Lottie from 'react-lottie';
import LoadingMask from 'react-loadingmask';

import farm from 'assets/farm.json';
import farm2 from 'assets/farm2.json';
import logo from 'assets/logo.png';

import InputBasic from 'components/InputBasic';
import Button from 'components/Button';
import { useAuth } from 'hooks/auth';
import { useHistory } from 'react-router-dom';
import { Container, ContentContainer, Logo, Form, Copyright } from './styles';

const Login = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [loading, setLoading] = useState(false);

    const history = useHistory();
    const { signIn } = useAuth();

    useEffect(() => {
        function getWindowDimensions() {
            const { innerWidth: width } = global.window;

            if (width <= 1000) {
                setIsMobile(true);
            }
        }
        getWindowDimensions();
    }, []);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: isMobile ? farm2 : farm,
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
            console.log(error);
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
                <Copyright>Crafted by Vinicios Engelage</Copyright>
            </ContentContainer>
            <Lottie
                style={
                    isMobile && {
                        position: 'absolute',
                        bottom: 0,
                    }
                }
                options={defaultOptions}
                width="100%"
                height={isMobile ? '100px' : '100%'}
            />
        </Container>
    );
};

export default Login;
