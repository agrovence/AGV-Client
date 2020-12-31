import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';

import farm from 'assets/farm.json';
import farm2 from 'assets/farm2.json';
import logo from 'assets/logo.png';

import InputBasic from 'components/InputBasic';
import Button from 'components/Button';
import { Container, ContentContainer, Logo, Form, Copyright } from './styles';

function Login() {
    const [isMobile, setIsMobile] = useState(false);

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

    return (
        <Container>
            <ContentContainer>
                <Logo src={logo} alt="logo" />
                <Form>
                    <InputBasic name="email" placeholder="Email" />
                    <InputBasic name="password" placeholder="Senha" />
                    <Button>Fazer Login</Button>
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
}

export default Login;
