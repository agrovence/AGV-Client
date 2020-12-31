import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { shade } from 'polished';

export const Container = styled.div`
    display: flex;
    width: 100%;
    max-height: 600px;
    justify-content: center;
    align-items: center;
    padding: 20px;

    ${props => props.justify === 'column' && css`
        flex-direction: column;

        h2, p{
            text-align: center;
        }

        p{
            margin-top: 10px;
            margin-bottom: 10px;
        }

        img{
            margin-left: 0;
            margin-top: 40px;
        }

        & > div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    `}

    @media only screen and (max-width: 600px) {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h2, p{
            text-align: center;
            width: 300px;
        }
        img{
            width: 100%;
            margin-top: 40px;
        }
        & > div {
            width: 300px;
        }
    }
`;

export const ContentContainer = styled.div`
    width: 400px;
    @media only screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const ImgContainer = styled.div`
`;

export const ButtonContainer = styled.div`
    margin-top: 30px;
`;

export const Title = styled.h2`
    font-size: 28px;
    text-align: left;
`;
export const Text = styled.p`
    margin-top: 10px;
`;
export const Button = styled(Link)`
    padding: 15px;
    color: #fff;
    border-radius: 6px;
    text-decoration: none;
    border: none;
    outline: none;
    background-color: ${props => props.theme.colors.primary};

    ${props => props.theme && css`
        &:hover {
            background-color: ${shade(0.5, props.theme.colors.primary)}
        }
    `}
`;
export const Image = styled.img`
    background-size: cover;
    max-width: 500px;
    border-radius: 6px;
    margin-left: 20px;

    @media only screen and (max-width: 600px) {
        margin-left: 0;
    }
`;
