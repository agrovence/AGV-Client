import styled, { css } from 'styled-components';
import ReactCarousel from 'react-elastic-carousel';

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
`;

export const CardContainer = styled.div`
    display: flex;
    padding: 0 20px;
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

export const SectionTitle = styled.strong`
    font-size: 26px;
    margin-top: 20px;
`;

export const Carousel = styled(ReactCarousel)`
    display: flex;
    background: ${props => props.theme.colors.primary};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    justify-content: center;
    align-items: center;
    height: 160px;
    margin-top: 20px;
`;

export const LogoContainer = styled.div`
    display: flex;
    height: 160px;
    justify-content: center;
    align-items: center;
    margin-left: 0;
`;
