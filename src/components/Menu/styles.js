import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { shade } from 'polished';

export const Container = styled.div`
    width: 150px;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;
export const PerfilContainer = styled.div`
    cursor: pointer;
`;

export const Item = styled.li`
    display: flex;
    height: 30px;
    align-items: center;
    justify-content: flex-start;
    width: 200px;
    margin-top: 10px;
    border-radius: 3px;

    svg{
        width: 26px;
        height: 26px;
        color: ${props => props.theme.colors.text};
    }

    &:hover{
        a, p{
            color: ${props => props.theme.colors.secundary}
        }

        svg{
            color: ${props => props.theme.colors.secundary}
        }
    }
`;
export const Text = styled.p`
    font-size: 16px;
    margin-left: 15px;
    font-weight: bold;
    color: ${props => props.theme.colors.text};
`;

export const ItemTitle = styled(Link)`
    font-size: 16px;
    margin-left: 15px;
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    font-weight: bold;
`;

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Logo = styled.img`
    width: 140px;
    display: flex;
    margin-top: 10px;
`;

export const AvatarContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 200px;
`;

export const Avatar = styled.img`
    width: 50px;
    height: 50px;
`;

export const Divisor = styled.hr`
    width: 30%;
    text-align: left;
    margin-left: 0;
    border-width: 1px;
    height: 1px;
    border-radius: 6px;
    border-color: ${props => props.theme.colors.text};
    margin-top: 20px;
    opacity: 0.5;
`;

export const Name = styled.strong`
    color: #fff;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
`;

export const PerfilImage = styled.img`
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const MenuContainer = styled.div`
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 1;

    width: 250px;
    height: 300px;

    position: absolute;
    top: calc(100% + 12px);

    border-radius: 3px;

    font-size: 12px;
    color: #fff;

    opacity: 0;
    display: none;
    transition: opacity 0.4s;

    background-color: ${props => props.theme.colors.primary};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    ${props => props.open && css`
        opacity: 1;
        display: flex;
    `}

    &::before{
        content: '';
        border-style: solid;
        border-color: ${props => props.theme.colors.primary} transparent;
        border-width: 0 16px 16px 16px;
        bottom: 100%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    };
`;
