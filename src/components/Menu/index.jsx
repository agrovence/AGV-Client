import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import {
    IoPersonCircleOutline,
    IoLogOutOutline,
    IoCubeOutline,
    IoPersonAdd,
    IoPerson,
} from 'react-icons/io5';

import logoLight from 'assets/logo.png';
import defaultAvatar from 'assets/avatar.png';
import { useAuth } from 'hooks/auth';
import {
    Container,
    PerfilContainer,
    PerfilImage,
    Item,
    Avatar,
    AvatarContainer,
    Name,
    Divisor,
    Logo,
    MenuContainer,
    ItemTitle,
    ItemContainer,
} from './styles';

const Menu = ({ open }) => {
    const history = useHistory();
    const { user } = useAuth();
    const hasAuthenticated = !!localStorage.getItem('@Agrovence:token');

    const getUserAvatar = useCallback(() => {
        if (user.image === null) {
            return defaultAvatar;
        }

        return user.image.url;
    }, []);

    return (
        <Container>
            <PerfilContainer open={open}>
                <PerfilImage
                    src={hasAuthenticated ? getUserAvatar() : defaultAvatar}
                    alt="avatar"
                />
            </PerfilContainer>

            <MenuContainer open={open} hasAuthenticated={hasAuthenticated}>
                <Logo
                    src={logoLight}
                    alt="logo"
                    onClick={() => history.push('/')}
                />
                {hasAuthenticated ? (
                    <>
                        <ItemContainer>
                            <Item>
                                <IoPersonCircleOutline />
                                <ItemTitle>Meu perfil</ItemTitle>
                            </Item>
                            <Item>
                                <IoCubeOutline />
                                <ItemTitle to="/products">Produtos</ItemTitle>
                            </Item>
                            <Item>
                                <IoLogOutOutline />
                                <ItemTitle>Sair</ItemTitle>
                            </Item>
                        </ItemContainer>
                        <Divisor />
                        <AvatarContainer>
                            <Avatar src={defaultAvatar} alt="avatar" />
                            <Name>
                                {user.name} {user.surname}
                            </Name>
                        </AvatarContainer>
                    </>
                ) : (
                    <ItemContainer>
                        <Item onClick={() => history.push('login')}>
                            <IoPerson />
                            <ItemTitle>Fazer login</ItemTitle>
                        </Item>
                        <Item>
                            <IoPersonAdd />
                            <ItemTitle>Criar conta</ItemTitle>
                        </Item>
                    </ItemContainer>
                )}
            </MenuContainer>
        </Container>
    );
};

export default Menu;
