import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Header from 'components/Header';
import Trimble from 'assets/representatives/trimble';
import ProductCard from 'components/ProductCard';

import imgCard from 'assets/Frame.png';

import Footer from 'components/Footer';
import {
    Container,
    Carousel,
    LogoContainer,
    PaginationContainer,
    Pagination,
    CardContainer,
} from './styles';

const Products = () => {
    const { colors } = useContext(ThemeContext);

    function handleDevice() {
        const { innerWidth: width } = global.window;

        if (width <= 600) {
            return 1;
        }

        if (width <= 1400) {
            return 5;
        }

        return 6;
    }

    return (
        <Container>
            <Header />
            <Carousel
                itemsToShow={handleDevice()}
                showArrows={false}
                renderPagination={({ pages, activePage, onClick }) => (
                    <PaginationContainer direction="row">
                        {pages.map(page => {
                            const isActivePage = activePage === page;
                            return (
                                <Pagination
                                    key={page}
                                    onClick={() => onClick(page)}
                                    active={isActivePage}
                                />
                            );
                        })}
                    </PaginationContainer>
                )}
            >
                <LogoContainer>
                    <Trimble color={colors.text} width="130px" />
                </LogoContainer>
                <LogoContainer>
                    <Trimble color={colors.text} width="130px" />
                </LogoContainer>
                <LogoContainer>
                    <Trimble color={colors.text} width="130px" />
                </LogoContainer>
                <LogoContainer>
                    <Trimble color={colors.text} width="130px" />
                </LogoContainer>
                <LogoContainer>
                    <Trimble color={colors.text} width="130px" />
                </LogoContainer>
                <LogoContainer>
                    <Trimble color={colors.text} width="130px" />
                </LogoContainer>
                <LogoContainer>
                    <Trimble color={colors.text} width="130px" />
                </LogoContainer>
                <LogoContainer>
                    <Trimble color={colors.text} width="130px" />
                </LogoContainer>
            </Carousel>

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

export default Products;
