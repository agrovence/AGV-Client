import React, { useEffect, useCallback, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'components/Tabs';

import Header from 'components/Header';
import Footer from 'components/Footer';
import api from 'services/api';
import { Container, Title, Image, Price, Description } from './styles';

const Product = ({ match }) => {
    const [product, setProduct] = useState({});

    const getProduct = useCallback(async () => {
        const response = await api.get(`/products/${match.params.id}`);
        setProduct(response.data);
    }, []);

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <Container>
            <Header />
            {product && (
                <>
                    <Title>{product.name}</Title>
                    {product.image && (
                        <Image
                            src={product.image.url}
                            alt={product.image.original_name}
                        />
                    )}
                    <Tabs>
                        <TabList>
                            <Tab>Descrição</Tab>
                            <Tab>Manual2</Tab>
                            <Tab>+ Informações</Tab>
                        </TabList>

                        <TabPanel>
                            <Description>{product.description}</Description>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                    </Tabs>
                </>
            )}
            <Price />
            <Footer />
        </Container>
    );
};

export default Product;
