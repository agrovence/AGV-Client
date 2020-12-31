import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    width: 100%;
    background: ${props => props.theme.colors.primary};
    border-radius: 3px;
    height: 40px;
    
    ${props => props.theme && css`
        &:hover{
            background: ${shade(0.2, props.theme.colors.primary)};

            button{
                cursor: pointer;
                color: #fff;
            }
        }
    `}
`;

export const ButtonText = styled.button`
    display: flex;
    width: 100%;
    height: 100%;
    border:none;
    outline:none;
    background: none;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.secundary};
    font-family: 'Quicksand';
    font-weight: 500;
`;
