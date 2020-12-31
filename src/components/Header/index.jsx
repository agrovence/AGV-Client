import React, { useCallback, useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { useHistory } from 'react-router-dom';

import logoLight from 'assets/logo.png';
import logoDark from 'assets/logo-dark.png';

import {
    Container,
    Logo,
    MenuText,
    MenuContainer,
    Menu,
    LogoContainer,
    AvatarContainer,
} from './styles';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();
    const { title } = useContext(ThemeContext);

    const handleCloseMenu = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <Container>
            <LogoContainer>
                <Logo
                    src={title === 'light' ? logoLight : logoDark}
                    alt="logo"
                    onClick={() => history.push('/')}
                />
            </LogoContainer>
            <MenuContainer>
                <MenuText to="/products">Produtos</MenuText>
                <MenuText>Contato</MenuText>
                <MenuText>Sobre</MenuText>
            </MenuContainer>

            <AvatarContainer
                onClickAway={handleCloseMenu}
                onClick={() => setIsOpen(!isOpen)}
            >
                <Menu open={isOpen} />
            </AvatarContainer>
        </Container>
    );
};

export default Header;
