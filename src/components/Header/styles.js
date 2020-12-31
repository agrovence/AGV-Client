import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import MenuComponent from 'components/Menu';
import ClickAwayListener from 'react-click-away-listener';

export const Container = styled.div`
    display: flex;
    height: 60px;
    width: 100%;
    background: ${props => props.theme.colors.primary};
    justify-content: space-around;
    align-items: center;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media only screen and (max-width: 1400px) {
        padding: 0 15px;
    }
`;

export const Logo = styled.img`
    width: 150px;
    height: 100%;
    cursor: pointer;
`;

export const MenuContainer = styled.div`
    display: flex;
    width: 300px;
    height: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const Menu = styled(MenuComponent)`
    height: 100%;
    ${props => props.open && css`
        overflow-y: hidden;
    `}
`;

export const LogoContainer = styled.div`
    display: flex;
    width: 300px;
    align-items: flex-end;
    justify-content: flex-end;
`;

export const AvatarContainer = styled(ClickAwayListener)`
    display: flex;
    width: 300px;
`;

export const MenuText = styled(Link)`
    color: #fff;
    font-size: 16px;
    text-decoration: none;
    padding: 5px 10px;

    &:hover{
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.primary};
        border-radius: 6px;
        font-weight: bold;
    }

    @media only screen and (max-width: 1400px) {
        display: none;
    }
`;

