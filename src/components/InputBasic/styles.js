import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 60px;
    background: ${props => props.theme.colors.text};
    border-radius: 3px;
    padding: 0 12px;
    margin-bottom: 10px;

    ${props => props.isFocused && css`
        border: 2px solid ${props.theme.colors.primary};
    `};

    ${props => props.isFilled && css`
        border: 2px solid ${props.theme.colors.primary};
    `};

    ${props => props.isErrored && css`
        border: 2px solid #CF3E3E;
        margin-bottom: 15px;
    `}

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
        font-size: 16px;
    }
`;

export const ErrorText = styled.span`
    color: #CF3E3E;
`;
