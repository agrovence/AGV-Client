import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { Form as Unform } from '@unform/web';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;  
    flex-direction: column;
    align-items: center;
    position: relative;
`;
export const ContentContainer = styled.div`
    display: flex;
    width: 50vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 200px;
    margin-top: 50px;

    @media only screen and (max-width: 1000px) {
        width: 100%;
        margin-left: 0;
    } 
`;

export const Copyright = styled.p`
    font-size: 12px;
    color: ${props => props.theme.colors.text};
    margin-top: 160px;
`;

export const Logo = styled.img`
    width: 600px;

    @media only screen and (max-width: 1000px) {
        width: 70vw;
    } 
`;

export const Form = styled(Unform)`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;

    @media only screen and (max-width: 1000px) {
        width: 100vw;
        padding: 20px;
    } 
`;

export const CreateAccount = styled(Link)`
    margin-top: 15px;
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    font-size: 16px;

    ${props => css`
        &:hover{
            color: ${darken(0.2, props.theme.colors.text)}
        }
    `}
`; 
