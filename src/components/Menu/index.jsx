import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    IoPersonCircleOutline,
    IoLogOutOutline,
    IoCubeOutline,
} from 'react-icons/io5';

import logoLight from 'assets/logo.png';
import avatar from 'assets/avatar.png';
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

    return (
        <Container>
            <PerfilContainer open={open}>
                <PerfilImage src={avatar} alt="avatar" />
            </PerfilContainer>

            <MenuContainer open={open}>
                <Logo
                    src={logoLight}
                    alt="logo"
                    onClick={() => history.push('/')}
                />
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
                    <Avatar src={avatar} alt="avatar" />
                    <Name>Vinicios Valensuela</Name>
                </AvatarContainer>
            </MenuContainer>
        </Container>
    );
};

export default Menu;
