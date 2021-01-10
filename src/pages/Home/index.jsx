import React, { useContext, useEffect, useState, useCallback } from 'react';
import { ThemeContext } from 'styled-components';

import BigActionCard from 'components/BigActionCard';
import Header from 'components/Header';
import Footer from 'components/Footer';

import cardImg from 'assets/card1.png';
import Trimble from 'assets/representatives/trimble';
import Headsight from 'assets/representatives/headsight';
import ProductCard from 'components/ProductCard';

import { useAuth } from 'hooks/auth';
import api from 'services/api';
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
    const [isLogged, setIsLogged] = useState(false);
    const [products, setProducts] = useState([]);
    const { token } = useAuth();

    const getWindowDimensions = useCallback(() => {
        const { innerWidth: width } = global.window;

        if (width <= 600) {
            setIsMobile(true);
        }
    }, []);

    const getItems = useCallback(async () => {
        const response = await api.get('/products?page=1&limit=9');
        setProducts(response.data.data);
    }, []);

    useEffect(() => {
        getWindowDimensions();
        getItems();

        if (token) setIsLogged(true);
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
                buttonLink="/products"
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

            <SectionTitle>Produtos recentes</SectionTitle>

            <CardContainer>
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.name}
                        image={product.image.url}
                        price={isLogged && product.price}
                        description={product.description}
                    />
                ))}
            </CardContainer>
            <Footer />
        </Container>
    );
};

export default Home;
