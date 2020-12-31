import React from 'react';

import { IoEyeOutline } from 'react-icons/io5';
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

const ProductCard = ({ title, image, price }) => (
    <Container>
        <ImageContainer>
            <Image src={image} />
        </ImageContainer>
        <ContentContainer>
            <TextContainer>
                <Title>{title}</Title>
                <Description>{title}</Description>
            </TextContainer>
            <ButtonContainer>
                <Button>
                    {price || <IoEyeOutline size={20} color="#fff" />}
                </Button>
                <Button>Informações</Button>
            </ButtonContainer>
        </ContentContainer>
    </Container>
);

export default ProductCard;
