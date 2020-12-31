import styled, { css } from 'styled-components';
import ReactCarousel from 'react-elastic-carousel';
import { IoRadioButtonOn } from 'react-icons/io5';
import { shade } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:100%;

    ::-webkit-scrollbar {
        display: none;
    }
`;

export const Carousel = styled(ReactCarousel)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1400px;
    margin-top: 20px;

    @media only screen and (max-width: 1400px) {
        width: 1200px;
    }

    @media only screen and (max-width: 600px) {
        width: 100%;
        padding: 0 20px;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    height: 60px;
    width: 200px;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.primary};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const PaginationContainer = styled.div`
    margin-top: 20px;
`;

export const Pagination = styled(IoRadioButtonOn)`
    width: 16px;
    height: 16px;
    cursor: pointer;
    ${props => props.theme && css`
        color: ${props.theme.colors.primary};
        &:hover{
            color: ${shade(0.1, props.theme.colors.primary)};
        }
    `}

    ${props => !props.active && css`
        color: ${shade(0.5, props.theme.colors.primary)};
    `}
`;

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 1400px;

    @media only screen and (max-width: 1400px) {
        width: 1200px;
    }

    @media only screen and (max-width: 600px) {
        width: 100%;
        padding: 0 20px;
    }
`;

