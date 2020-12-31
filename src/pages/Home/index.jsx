import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';

import BigActionCard from 'components/BigActionCard';
import Header from 'components/Header';
import Footer from 'components/Footer';

import cardImg from 'assets/card1.png';
import Trimble from 'assets/representatives/trimble';
import Headsight from 'assets/representatives/headsight';
import ProductCard from 'components/ProductCard';

import imgCard from 'assets/Frame.png';

import {
    Container,
    SectionTitle,
    Carousel,
    LogoContainer,
    CardContainer,
} from './styles';

const Home = () => {
    const { colors } = useContext(ThemeContext);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function getWindowDimensions() {
            const { innerWidth: width } = global.window;

            if (width <= 600) {
                setIsMobile(true);
            }
        }
        getWindowDimensions();
    }, []);

    return (
        <Container>
            <Header />
            <BigActionCard
                img={cardImg}
                imgDescription="card-marca"
                title="Transformando o modo
            como o mundo trabalha!"
                text="Na Agrovence nós vendemos a evolução,
            transformamos o modo como o mundo trabalha"
                buttonText="Confira a nossa tecnologia agricola"
                buttonLink="/produtcs"
            />

            <SectionTitle>Escolha por marcas</SectionTitle>

            <Carousel
                itemsToShow={isMobile ? 1 : 6}
                pagination={false}
                showArrows={false}
            >
                <LogoContainer>
                    <Trimble color={colors.text} width="230px" />
                </LogoContainer>
                <LogoContainer>
                    <Headsight color={colors.text} width="230px" />
                </LogoContainer>
                <LogoContainer>
                    <Trimble color={colors.text} width="230px" />
                </LogoContainer>
                <LogoContainer>
                    <Trimble color={colors.text} width="230px" />
                </LogoContainer>
            </Carousel>

            <SectionTitle>Produtos recentess</SectionTitle>

            <CardContainer>
                <ProductCard title="GPS EZ-Guide 250" image={imgCard} />
                <ProductCard
                    title="GPS EZ-Guide 250"
                    image={imgCard}
                    price="R$ 250,00"
                />
                <ProductCard
                    title="GPS EZ-Guide 250"
                    image={imgCard}
                    price="R$ 250,00"
                />
            </CardContainer>

            <Footer />
        </Container>
    );
};

export default Home;
