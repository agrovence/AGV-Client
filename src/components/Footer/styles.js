import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { shade } from 'polished';

export const Container = styled.footer`
    background-color: ${props => props.theme.colors.primary};
    width: 100%;
    height: 300px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-bottom: 0;
    padding: 0;
`;

export const Logo = styled.img`
    @media only screen and (max-width: 600px) {
        width: 200px;
    }

`;
export const ContactContainer = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 600px) {
        flex-direction: column
    }

`;

export const TextContact = styled(Link)`
    display: flex;
    font-size: 18px;
    font-weight: 500;
    color: ${props => props.theme.colors.text};
    height: 60px;
    text-decoration: none;

    @media only screen and (max-width: 400px) {
        height: auto;
    }

    &:hover{
        color: ${props => props.theme.colors.secundary}
    }
`;

export const TextContactCenter = styled(TextContact)`
    margin: 0 20px;
    &::after{
        content: '';
        background: ${props => props.theme.colors.text};
        width: 1px;
        height: 26px;
        top: 0;
        bottom: 0;
        margin-left: 10px;
        border-radius: 6px;
    }

    &::before{
        content: '';
        background: ${props => props.theme.colors.text};
        width: 1px;
        height: 26px;
        top: 0;
        bottom: 0;
        margin-right: 10px;
        border-radius: 6px;
    }
`;


export const IconContainer = styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    padding: 0;

    svg{
        width: 40px;
        height: 40px;
        color: ${props => props.theme.colors.text};

        & + svg{
            margin-left: 15px;
        }

        &:hover{
            color: ${props => props.theme.colors.secundary}
        }
    }
`;

export const CopyrightContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 0;
`;
export const CopyrightText = styled.p`
    margin-top: 5px;
    margin-bottom: 5px;

    ${props => props.theme.title === 'light' && css`
        font-weight: 500;
    `}
`;

export const MainContainer = styled.div`
    margin-top: 20px;
    margin-bottom: 0;
    padding: 0;
    width: 100%;
`
