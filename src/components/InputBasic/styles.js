import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 40px;
    background: ${props => props.theme.colors.text};
    border-radius: 3px;
    padding: 0 10px;
    margin-bottom: 10px;

    ${props => props.isFocused && css`
        border: 2px solid ${props.theme.colors.primary};
    `};

    ${props => props.isFilled && css`
        border: 2px solid ${props.theme.colors.primary};
    `};

`;

export const Input = styled.input`
    background: none;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;

    &::placeholder{
        color: ${props => props.theme.colors.secundary};
        font-family: 'Quicksand';
        font-weight: 500;
    }
`;
