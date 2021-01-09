import React, { useCallback } from 'react';
import useModal from 'react-hooks-use-modal';

import { IoEyeOutline, IoCubeOutline } from 'react-icons/io5';
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
    ModalContainer,
    ModalTitle,
    ModalButton,
} from './styles';

const ProductCard = ({ title, image, description, price, id }) => {
    const history = useHistory();
    const [Modal, open, close, isOpen] = useModal('root', {
        preventScroll: true,
    });

    const handleProduct = useCallback(productID => {
        history.push(`/product/${productID}`);
    }, []);

    return (
        <>
            <Modal isOpen={isOpen}>
                <ModalContainer>
                    <ModalTitle>
                        Para ver o preço deste item, faça o login!
                    </ModalTitle>
                    <ButtonContainer>
                        <ModalButton
                            confirm
                            onClick={() => history.push('/login')}
                        >
                            Login
                        </ModalButton>
                        <ModalButton cancel onClick={close}>
                            Cancelar
                        </ModalButton>
                    </ButtonContainer>
                </ModalContainer>
            </Modal>
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
                            onClick={price ? () => handleProduct(id) : open}
                        >
                            {(price && `R$ ${price}`) || (
                                <IoEyeOutline size={20} color="#fff" />
                            )}
                        </Button>
                        <Button onClick={() => handleProduct(id)}>
                            <IoCubeOutline size={16} color="#fff" id="icon" />
                            Saber mais
                        </Button>
                    </ButtonContainer>
                </ContentContainer>
            </Container>
        </>
    );
};

export default ProductCard;
