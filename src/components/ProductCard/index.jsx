import React, { useCallback } from 'react';

import { IoEyeOutline } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';
import {
    Container,
    Title,
    Image,
    Button,
    ImageContainer,
    TextContainer,
    ButtonContainer,
    ContentContainer,
    Description,
} from './styles';

const ProductCard = ({ title, image, description, price, id }) => {
    const history = useHistory();

    const handleLogin = useCallback(() => {
        history.push('/login');
    }, []);

    const handleProduct = useCallback(productID => {
        history.push(`/product/${productID}`);
    }, []);

    return (
        <Container>
            <ImageContainer>
                <Image src={image} />
            </ImageContainer>
            <ContentContainer>
                <TextContainer>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </TextContainer>
                <ButtonContainer>
                    <Button
                        onClick={price ? () => handleProduct(id) : handleLogin}
                    >
                        {(price && `R$ ${price}`) || (
                            <IoEyeOutline size={20} color="#fff" />
                        )}
                    </Button>
                    <Button>Informações</Button>
                </ButtonContainer>
            </ContentContainer>
        </Container>
    );
};

export default ProductCard;
