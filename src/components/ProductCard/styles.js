import styled, { css } from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 440px;
    border-radius: 6px;
    height: 160px;
    display: flex;
    margin-top: 20px;
    ${props => props.theme && css`
        background: ${shade(0.1, props.theme.colors.background)};
    `}
    &:hover{
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        transform: translateY(-2px);
    }
    @media only screen and (max-width: 1400px) {
        width: 350px;
        height: 120px;
    }
    @media only screen and (max-width: 600px) {
        margin-top: 20px;
        height: 100px
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
export const ImageContainer = styled.div`
    height: 160px;
    width: 160px;
    background: #fff;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;

    @media only screen and (max-width: 1400px) {
        height: 120px;
        width: 120px;
    }

    @media only screen and (max-width: 600px) {
        height: 100px;
        width: 100px;
    }
`;

export const Image = styled.img`
    height: 160px;
    width: 160px;

    @media only screen and (max-width: 1400px) {
        height: 120px;
        width: 120px;
    }

    @media only screen and (max-width: 600px) {
        height: 100px;
        width: 100px;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-top: 10px;

    height: 100%;
`;

export const Title = styled.h3`
    font-size: 14px;
    width: 90%;
    color: ${props => props.theme.colors.text};

    @media only screen and (max-width: 1400px) {
        font-size: 12px;
    }
`;

export const Description = styled.p`
    color: ${props => props.theme.colors.text};
    font-size: 12px;
    margin-top: 5px;

    @media only screen and (max-width: 1400px) {
        font-size: 10px;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    margin: 10px 0 10px 10px;
`;

export const Button = styled(Link)`
    background: ${props => props.theme.colors.primary};

    border-radius: 3px;
    width: 100px;
    height: 30px;

    color: #fff;
    text-decoration: none;
    font-size: 12px;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    & + a{
        margin-left: 10px;
    }

    &:hover{
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        transform: translateY(-2px);
    }

    @media only screen and (max-width: 1400px) {
        font-size: 12px;
        width: 100px;
        height: 25px;
    }

    @media only screen and (max-width: 600px) {
        width: 80px;
        height: 25px;
    }
`;
