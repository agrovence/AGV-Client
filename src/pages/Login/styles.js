import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;  
    position: relative;

    @media only screen and (max-width: 1000px) {
        flex-direction: column;
    } 
`;
export const ContentContainer = styled.div`
    display: flex;
    width: 50vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 200px;

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
