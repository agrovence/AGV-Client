import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import {
    IoLogoWhatsapp,
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoYoutube,
} from 'react-icons/io5';

import {
    Container,
    ContactContainer,
    IconContainer,
    TextContact,
    Logo,
    TextContactCenter,
    CopyrightContainer,
    CopyrightText,
    MainContainer,
} from './styles';

import logoLight from '../../assets/logo.png';
import logoDark from '../../assets/logo-dark.png';

const Footer = () => {
    const { title } = useContext(ThemeContext);

    return (
        <MainContainer>
            <Container>
                <Logo src={title === 'light' ? logoLight : logoDark} />

                <ContactContainer>
                    <TextContact>Fale conosco</TextContact>
                    <TextContactCenter to="/products">
                        Acesse nosso catalógo
                    </TextContactCenter>
                    <TextContact>+ 45 9999-88888</TextContact>
                </ContactContainer>

                <IconContainer>
                    <IoLogoWhatsapp />
                    <IoLogoFacebook />
                    <IoLogoInstagram />
                    <IoLogoYoutube />
                </IconContainer>
            </Container>
            <CopyrightContainer>
                <CopyrightText>Crafted by Vinicios Engelage</CopyrightText>
            </CopyrightContainer>
        </MainContainer>
    );
};

export default Footer;
