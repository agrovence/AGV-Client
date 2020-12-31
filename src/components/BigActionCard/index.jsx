import React from 'react';

import {
    Container,
    ContentContainer,
    Title,
    Text,
    Button,
    ImgContainer,
    Image,
    ButtonContainer,
} from './styles';

function BigActionCard({
    img,
    title,
    text,
    buttonText,
    buttonLink,
    imgDescription,
    justify,
}) {
    return (
        <Container justify={justify && justify}>
            <ContentContainer>
                <Title>{title}</Title>
                <Text>{text}</Text>
                <ButtonContainer>
                    <Button to={buttonLink}>{buttonText}</Button>
                </ButtonContainer>
            </ContentContainer>

            <ImgContainer>
                <Image src={img} alt={imgDescription} />
            </ImgContainer>
        </Container>
    );
}

export default BigActionCard;
